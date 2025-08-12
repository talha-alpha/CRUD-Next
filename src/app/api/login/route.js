import { cookies } from "next/headers";

export async function POST(req) {
  const { email, password } = await req.json();
  const cookie = cookies();

  if (email === "user@example.com" && password === "123456") {
    cookie.set("token", "test-token-for-auth")

    return new Response(JSON.stringify({ token: "fake-jwt-token" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    cookie.delete("token")
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
