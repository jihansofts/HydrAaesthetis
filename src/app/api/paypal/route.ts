import paypal from "@paypal/checkout-server-sdk";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Order from "@/model/Order";

const environment = new paypal.core.SandboxEnvironment(
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
  process.env.PAYPAL_CLIENT_SECRET!
);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req: NextRequest) {
  await connectDB(); // connect to MongoDB

  const body = await req.json();
  const { cartItems, userDetails } = body;

  type CartItem = { name: string; price: number; quantity: number };
  const total = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: total.toFixed(2),
        },
      },
    ],
  });

  try {
    // 1️⃣ Create PayPal order
    const order = await client.execute(request);

    // 2️⃣ Save order in MongoDB
    const newOrder = await Order.create({
      paypalOrderId: order.result.id,
      cartItems,
      userDetails,
      total,
      status: "PENDING", // will change after capture
    });

    // 3️⃣ Return PayPal order ID to frontend
    return NextResponse.json({ id: order.result.id, dbId: newOrder._id });
  } catch (err) {
    console.error("PayPal Error:", err);
    return NextResponse.json(
      { error: "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
