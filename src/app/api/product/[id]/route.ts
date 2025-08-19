import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { connectDB } from "@/lib/mongoose";
import { requireRole } from "@/lib/roleCheck";
import { ProductModel } from "@/model/Product";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormDataFields {
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export const PATCH = requireRole(["admin", "moderator"])(
  async (req: NextRequest, params) => {
    await connectDB();
    const id = params.id;
    try {
      const formData = await req.formData();

      const name = formData.get("name") as string | null;
      const category = formData.get("category") as string | null;
      const price = formData.get("price") as string | null;
      const description = formData.get("description") as string | null;
      const image = formData.get("image") as File | null;

      const updateData: Partial<FormDataFields> = {};
      if (name) updateData.name = name;
      if (category) updateData.category = category;
      if (price) updateData.price = parseFloat(price);
      if (description) updateData.description = description;

      if (image && image.size > 0) {
        const uploadDir = path.join(process.cwd(), "public/images");
        await fs.mkdir(uploadDir, { recursive: true });

        const buffer = Buffer.from(await image.arrayBuffer());
        const filename = `${Date.now()}-${image.name.replace(/\s+/g, "-")}`;
        const filepath = path.join(uploadDir, filename);
        await fs.writeFile(filepath, buffer);

        updateData.image = `/public/images/${filename}`;
      }

      const updated = await ProductModel.updateOne({ _id: id }, updateData);

      if (!updated) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Product successfully updated",
        product: updated,
      });
    } catch (error) {
      console.error("Update error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
);

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
