import { cookies } from "next/headers";

export async function POST(req) {
  const { email, password } = await req.json();
  const cookieStore = cookies();

  if (email === "user@example.com" && password === "123456") {
    cookieStore.set({
      name: "token",
      value: "test-token-for-auth",
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
    });

    return new Response(JSON.stringify({ token: "fake-jwt-token" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    cookieStore.delete("token");
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE() {
  const cookieStore = cookies();

  cookieStore.delete("token");

  return new Response(JSON.stringify({ message: "Logged out successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}