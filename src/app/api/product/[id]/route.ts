import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

import { connectDB } from "@/lib/mongoose";
import { requireRole } from "@/lib/roleCheck";
import { ProductModel, ProductCategory } from "@/model/Product";

export const config = {
  api: {
    bodyParser: false,
  },
};

function getPublicIdFromUrl(url: string) {
  const parts = url.split("/");
  const filename = parts[parts.length - 1]; // abc123.png
  const publicIdWithExtension = `products/${filename}`;
  const publicId = publicIdWithExtension.replace(/\.[^/.]+$/, ""); // remove extension
  return publicId;
}

export const PUT = requireRole(["admin", "moderator"])(async (req: Request) => {
  await connectDB();

  try {
    const formData = await req.formData();
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const category = formData.get("category") as ProductCategory;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    const newImage = formData.get("image") as File | null;

    if (!id) {
      return NextResponse.json(
        { error: "Missing product id" },
        { status: 400 }
      );
    }

    const product = await ProductModel.findById(id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Get old public_id from existing image URL
    let imageUrl = product.image;
    let publicId: string | null = imageUrl
      ? getPublicIdFromUrl(imageUrl)
      : null;

    // If new image is uploaded, delete old image and upload new one
    if (newImage) {
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }

      const buffer = Buffer.from(await newImage.arrayBuffer());

      const result: { secure_url: string; public_id: string } =
        await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "/public/images" },
            (error, result) => {
              if (error) return reject(error);
              if (!result) return reject(new Error("Cloudinary upload failed"));
              resolve(result as { secure_url: string; public_id: string });
            }
          );
          stream.end(buffer);
        });

      imageUrl = result.secure_url; // set new image URL
      publicId = result.public_id; // update publicId (optional, for reference)
    }

    // Update product fields only if provided
    if (name) product.name = name;
    if (category) product.category = category;
    if (price) product.price = Number(price);
    if (description) product.description = description;
    product.image = imageUrl;

    await product.save();

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
});

export const DELETE = requireRole(["admin", "moderator"])(
  async (req: NextRequest, params) => {
    await connectDB();
    const id = params.id;
    const deleted = await ProductModel.deleteOne({ _id: id });
    if (!deleted) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      message: "Product successfully deleted",
    });
  }
);
