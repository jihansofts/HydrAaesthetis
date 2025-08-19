import { NextRequest, NextResponse } from "next/server";
import Order from "@/model/Order";
import { connectDB } from "@/lib/mongoose";
import { requireRole } from "@/lib/roleCheck";

// export const GET = requireRole(["admin"])(async (req: NextRequest) => {
//   await connectDB();

//   const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
//   const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
//   const skip = (page - 1) * limit;

//   // ✅ Get total number of orders
//   const totalOrders = await Order.countDocuments();

//   // ✅ Fetch paginated orders
//   const orders = await Order.find()
//     .skip(skip)
//     .limit(limit)
//     .sort({ createdAt: -1 }); // newest first (optional)

//   // ✅ Calculate total pages
//   const totalPages = Math.ceil(totalOrders / limit);

//   return NextResponse.json({
//     orders,
//     pagination: {
//       totalOrders,
//       totalPages,
//       currentPage: page,
//       limit,
//       hasNextPage: page < totalPages,
//       hasPrevPage: page > 1,
//     },
//   });
// });


// /api/orders/route.ts
export const GET = requireRole(["admin"])(async (req: NextRequest) => {
  await connectDB();

  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
  const skip = (page - 1) * limit;

  const [orders, total] = await Promise.all([
    Order.find().skip(skip).limit(limit),
    Order.countDocuments(),
  ]);

  return NextResponse.json({
    orders,
    total,
    totalPages: Math.ceil(total / limit),
  });
});
