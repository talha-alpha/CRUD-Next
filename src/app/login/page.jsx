"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="flex w-full h-full min-h-screen bg-radial-[at_25%_25%] from-[#FEAF00] to-[#F8D442] to-75%">
      <form
        onSubmit={handleLogin}
        className="flex flex-col m-auto w-full max-w-[475px] bg-white p-5 gap-10 rounded-xl"
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center gap-3 px-6 py-4">
            <div className="flex items-center h-[25px] w-[5px] bg-amber-400"></div>
            <p className="font-bold text-3xl text-black">CRUD OPERATIONS</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl text-black font-semibold">SIGN IN</p>
            <p className="text-neutral-400 text-sm">
              Enter your credentials to access your account
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-2">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-neutral-500">Email</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2.5 text-xs text-neutral-400 border border-neutral-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-neutral-500">Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2.5 text-xs text-neutral-400 border border-neutral-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-0"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex justify-center w-full bg-amber-400 rounded-lg cursor-pointer hover:bg-amber-500"
          >
            <p className="text-sm text-white px-3 py-2.5">SIGN IN</p>
          </button>

          <div className="flex justify-center text-sm font-semibold text-neutral-400 gap-1">
            Forgot your password?
            <span className="text-amber-400 hover:text-amber-500 underline cursor-pointer">
              Reset Password
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
