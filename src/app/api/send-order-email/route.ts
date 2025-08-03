// app/api/send-order-email/route.ts
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { userDetails, sessionId, cartItems } = await req.json();

    const itemsHtml = cartItems
      .map(
        (item: { title: string; quantity: number; price: number }) =>
          `<li><strong>${item.title}</strong> — Quantity: ${item.quantity}, Price: $${item.price}</li>`
      )
      .join("");

    if (!userDetails || !sessionId) {
      return new Response(JSON.stringify({ error: "Missing required data" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "✅ New Order Confirmed",
      html: `
        <h2>New Payment Received</h2>
        <p><strong>Name:</strong> ${userDetails.fullName}</p>

        <p><strong>Email:</strong> ${userDetails.email}</p>
        <p><strong>Phone:</strong> ${userDetails.phone}</p>
        <p><strong>Location:</strong> ${userDetails.address}</p>
        <ul>${itemsHtml}</ul>
        <p><strong>Session ID:</strong> ${sessionId}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(JSON.stringify({ error: "Email sending failed" }), {
      status: 500,
    });
  }
}
