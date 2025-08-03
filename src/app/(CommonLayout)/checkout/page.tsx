"use client";
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";
// import { useRouter, useSearchParams } from "next/navigation";

interface UserDetails {
  id?: string;
  email?: string;
  // Add other user details properties here
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // Add other cart item properties here
}

const CheckOut = () => {
  // const searchParams = useSearchParams();
  const { cartItems, cartTotal, userDetails } = useAppContext();
  const [activeTab, setActiveTab] = useState<"card" | "paypal">("card");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  // const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    setError("");
    console.log("Payment method: start");
    try {
      const storedUserDetails: UserDetails = JSON.parse(
        sessionStorage.getItem("userDetails") || JSON.stringify(userDetails)
      );
      const storedCartItems: CartItem[] = JSON.parse(
        sessionStorage.getItem("cartItems") || JSON.stringify(cartItems)
      );
      console.log("api call");
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems: storedCartItems,
          userDetails: storedUserDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Payment processing failed");
      }

      if (data.url) {
        // Store payment data in sessionStorage before redirecting
        sessionStorage.setItem(
          "paymentData",
          JSON.stringify({
            paymentMethod: "card",
            timestamp: new Date().toISOString(),
          })
        );

        window.location.href = data.url;
        setIsProcessing(false);
      }
      // For immediate verification (if needed)
      else {
        throw new Error("No redirect URL received");
      }
    } catch (err) {
      console.error("Payment processing error:", err);
      setIsProcessing(false);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Payment processing failed");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#252525] text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Payment Method</h1>

        {/* Error message display */}
        {error && (
          <div className="bg-red-500/20 text-red-300 p-3 rounded-md mb-6">
            {error}
          </div>
        )}

        <div className="flex items-center justify-center mb-6">
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === "card"
                ? "text-[#CAB485] border-b-2 border-[#CAB485]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("card")}>
            Credit/Debit Card
          </button>
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === "paypal"
                ? "text-[#CAB485] border-b-2 border-[#CAB485]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("paypal")}>
            PayPal
          </button>
        </div>

        {activeTab === "card" && (
          <div className="bg-[#2E2E2E] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Card Details</h2>
            <div className="space-y-4">
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-[#CAB485] via-[#D9C9A1] to-[#8A6D42] text-[#1E1E1E] font-bold py-3 rounded-md transition hover:opacity-90 disabled:opacity-70">
                  {isProcessing ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "paypal" && (
          <div className="bg-[#2E2E2E] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pay with PayPal</h2>
            <div className="space-y-4">
              <p className="text-gray-300 mb-6">
                You&apos;ll be redirected to PayPal to complete your payment
                securely.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-[#CAB485] via-[#D9C9A1] to-[#8A6D42] text-[#1E1E1E] font-bold py-3 rounded-md transition hover:opacity-90 disabled:opacity-70 flex items-center justify-center">
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                      </svg>
                      Continue with PayPal
                    </>
                  )}
                </button>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
