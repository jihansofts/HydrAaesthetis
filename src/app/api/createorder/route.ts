// import { NextRequest, NextResponse } from "next/server";
// import Order from "@/model/Order";
// import { connectDB } from "@/lib/mongoose";

// export const POST = async (req: NextRequest) => {
//   await connectDB();
//   const body = await req.json();
//   const { cartItems, userDetails, sessionId } = body;
//   console.log(cartItems, userDetails, sessionId, "<--- Order Data");

//   console.log(newOrder, " <--- New Order");
//   return NextResponse.json(newOrder);
// };
