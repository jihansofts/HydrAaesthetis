"use client";
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useAppContext } from "@/context/AppContext";

const CheckOut = () => {
  const { cartItems, cartTotal, userDetails } = useAppContext();
  const [error, setError] = useState<string>("");

  return (
    <div className="min-h-screen bg-[#252525] text-white p-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Pay with PayPal</h1>

        {error && (
          <div className="bg-red-500/20 text-red-300 p-3 rounded-md mb-6">
            {error}
          </div>
        )}

        <div className="bg-[#2E2E2E] p-6 rounded-lg">
          <p className="text-gray-300 mb-6">
            You&apos;ll be redirected to PayPal to complete your payment
            securely.
          </p>

          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
            }}>
            <PayPalButtons
              style={{ layout: "vertical", color: "gold" }}
              createOrder={async () => {
                const res = await fetch("/api/paypal", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    cartItems: cartItems,
                    userDetails: userDetails,
                  }),
                });

                const data = await res.json();
                return data.id;
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order?.capture();
                console.log("✅ Payment successful:", details);

                await fetch("/api/send-order-email", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    userDetails,
                    cartItems,
                    total: cartTotal,
                    paymentId: details?.id,
                  }),
                });

                alert("Payment completed successfully!");
              }}
            />
          </PayPalScriptProvider>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
