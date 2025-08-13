"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/user/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Login failed");

      // Save JWT token in localStorage or cookies
      localStorage.setItem("token", data.token);

      // Redirect to admin dashboard
      window.location.href = "/admin";
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <form
        onSubmit={handleLogin}
        className="bg-[#252525] p-6 rounded shadow-md max-w-6xl space-y-10">
        <h2 className="text-2xl text-white font-inter font-bold mb-4">
          Login Admin{" "}
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#2E2E2E] rounded-md p-3 text-white placeholder:text-gray-400 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#2E2E2E] rounded-md p-3 text-white placeholder:text-gray-400 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="
                relative cursor-pointer overflow-hidden 
                font-bold py-3  lg:px-32 md:px-24 px-16 sm:px-16 rounded-lg 
                text-[#1E1E1E]
               bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539]">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
