"use client";
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const CheckOut = () => {
  const { cartTotal } = useAppContext();
  const [activeTab, setActiveTab] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Payment Method</h1>

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
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Card Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleCardChange}
                  className="w-full bg-gray-700 rounded-md p-3 text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleCardChange}
                  className="w-full bg-gray-700 rounded-md p-3 text-white"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardChange}
                    className="w-full bg-gray-700 rounded-md p-3 text-white"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                    className="w-full bg-gray-700 rounded-md p-3 text-white"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#CAB485] via-[#D9C9A1] to-[#8A6D42] text-[#1E1E1E] font-bold py-3 rounded-md transition hover:opacity-90">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "paypal" && (
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pay with PayPal</h2>
            <div className="space-y-4">
              <p className="text-gray-300 mb-6">
                You&apos;ll be redirected to PayPal to complete your payment
                securely.
              </p>
              <div className="flex justify-center">
                <button className="w-full bg-gradient-to-r from-[#CAB485] via-[#D9C9A1] to-[#8A6D42] text-[#1E1E1E] font-bold py-3 rounded-md transition hover:opacity-90 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                  </svg>
                  Continue with PayPal
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
