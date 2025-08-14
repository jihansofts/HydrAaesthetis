import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { ProductModel } from "@/model/Product"; // your model import
import { connectDB } from "@/lib/mongoose"; // your DB connection
import { requireRole } from "@/lib/roleCheck";

interface FormDataFields {
  name: string;
  category: string;
  price: string;
  description: string;
  image: File;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = requireRole(["admin", "moderator"])(
  async (req: Request) => {
    await connectDB();
    try {
      // Parse the form data
      const formData = await req.formData();

      const formDataObj: Partial<FormDataFields> = {
        name: formData.get("name") as string,
        category: formData.get("category") as string,
        price: formData.get("price") as string,
        description: formData.get("description") as string,
        image: formData.get("image") as File,
      };

      // Validate required fields (except image for vitamins)
      if (!formDataObj.name || !formDataObj.price || !formDataObj.category) {
        return NextResponse.json(
          { error: "Missing required fields (name, price, category)" },
          { status: 400 }
        );
      }

      let imagePath = "";

      // Only process image if category is "drop"
      if (formDataObj.category === "drop") {
        if (!formDataObj.image) {
          return NextResponse.json(
            { error: "Image is required for drop products" },
            { status: 400 }
          );
        }

        // Create upload directory if it doesn't exist
        await fs.mkdir(path.join(process.cwd(), "public/images"), {
          recursive: true,
        });

        // Process file upload
        const file = formDataObj.image;
        const buffer = await file.arrayBuffer();
        const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
        const filepath = path.join(process.cwd(), "public/images", filename);
        await fs.writeFile(filepath, Buffer.from(buffer));

        imagePath = `/images/${filename}`; // use relative path for public
      }

      // Create product in DB
      const productData = {
        name: formDataObj.name,
        category: formDataObj.category,
        price: Number(formDataObj.price),
        description: formDataObj.description,
        image: imagePath, // empty string for vitamins
      };

      const newProduct = await ProductModel.create(productData);
      return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
      console.error("Upload error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
);

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category"); // ?category=vitamin
  const limit = parseInt(searchParams.get("limit") || "0", 10); // ?limit=5

  const filter: Record<string, unknown> = {};
  if (category) {
    filter.category = category;
  }

  let query = ProductModel.find(filter);
  if (limit > 0) {
    query = query.limit(limit);
  }

  const products = await query.exec();
  return NextResponse.json(products);
}
