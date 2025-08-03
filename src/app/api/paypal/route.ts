/* eslint-disable @typescript-eslint/no-explicit-any */
import paypal from "@paypal/checkout-server-sdk";
import { NextRequest } from "next/server";

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const environment = new paypal.core.SandboxEnvironment(
  clientId!,
  clientSecret!
);
const client = new paypal.core.PayPalHttpClient(environment);

interface RequestBody {
  cartItems: {
    title: string;
    price: number;
    quantity: number;
  }[];
  userDetails: {
    fullName: string;
    email: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { cartItems, userDetails }: RequestBody = await request.json();

    const requestPayPal = new paypal.orders.OrdersCreateRequest();
    requestPayPal.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2),
          },
          description: `Order from ${userDetails.fullName}`,
        },
      ],
      application_context: {
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel`,
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
      },
    });

    const response = await client.execute(requestPayPal);
    interface PayPalLink {
      href: string;
      rel: string;
      method: string;
    }

    interface PayPalResponse {
      result: {
        links: PayPalLink[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
      };
      [key: string]: any;
    }

    const approvalLink: string | undefined = (
      response as PayPalResponse
    ).result.links.find((link: PayPalLink) => link.rel === "approve")?.href;

    return Response.json({ url: approvalLink });
  } catch (err) {
    console.error("PayPal error:", err);
    return Response.json(
      { error: "Payment processing failed" },
      { status: 500 }
    );
  }
}
