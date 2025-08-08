"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        router.push("/"); // Redirect after success
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-full min-h-[100vh] bg-radial-[at_25%_25%] from-[#FEAF00] to-[#F8D442] to-75%">
      <div className="flex flex-col m-auto w-full max-w-[475px] h-full max-h-[550px] bg-white p-5 gap-10 rounded-xl">
        <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center gap-3 px-6 py-4">
             <div className="flex items-center h-[25px] w-[5px] bg-amber-400"></div>
             <p className="flex font-bold text-3xl text-black leading-[100%] items-center">
               CRUD OPERATIONS
             </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="flex text-center text-black text-2xl font-semibold">SIGN IN</p>
            <p className="flex text-center text-neutral-400 text-sm">Enter your credentials to access your account</p>
          </div>
          </div>
          <div className="flex flex-col gap-8 p-2">
            <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
            <p className="flex text-sm text-neutral-500">Email</p>
            <input type="text" placeholder="Enter your email" value={email}
          onChange={(e) => setEmail(e.target.value)} className="flex w-full px-3 py-2.5 text-xs text-neutral-400 border-1 border-neutral-200 rounded-md cursor-pointer focus-visible:ring-0 focus-visible:outline-none"/>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex text-sm text-neutral-500">Password</p>
            <input type="text" placeholder="Enter your password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="flex w-full px-3 py-2.5 text-xs text-neutral-400 border-1 border-neutral-200 rounded-md cursor-pointer focus-visible:ring-0 focus-visible:outline-none"/>
          </div>
          </div>
          <div
  onClick={handleLogin}
  className="flex justify-center w-full bg-amber-400 rounded-lg cursor-pointer hover:bg-amber-500"
>
  <p className="flex justify-center text-sm text-white px-3 py-2.5">SIGN IN</p>
</div>

          <div className="flex justify-center items-center text-sm font-semibold text-neutral-400 gap-1">
            Forgot your password? <span className="flex text-amber-400 underline cursor-pointer">Reset Password</span>
          </div>
          </div>
      </div>
    </div>
  )
}
