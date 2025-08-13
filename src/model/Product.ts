// models/Product.ts
import mongoose, { Document, Schema, Model } from "mongoose";

export type ProductCategory = "vitamin" | "drop";

export interface IProduct extends Document {
  name: string;
  category: ProductCategory;
  image: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["vitamin", "drop"],
      required: true,
    },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default ProductModel;
