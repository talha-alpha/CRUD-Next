export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "test@example.com" && password === "123456") {
    return new Response(JSON.stringify({ token: "fake-jwt-token" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
