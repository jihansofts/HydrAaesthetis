// models/Order.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  paypalOrderId: string;
  cartItems: { name: string; price: number; quantity: number }[];
  userDetails: { name: string; email: string; address?: string };
  total: number;
  status: "PENDING" | "PAID" | "CANCELLED";
}

const OrderSchema = new Schema<IOrder>(
  {
    paypalOrderId: { type: String, required: true },
    cartItems: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    userDetails: {
      name: String,
      email: String,
      address: String,
    },
    total: Number,
    status: {
      type: String,
      enum: ["PENDING", "PAID", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);
