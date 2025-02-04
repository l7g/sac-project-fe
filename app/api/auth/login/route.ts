import { NextRequest, NextResponse } from "next/server";

interface LoginRequest {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const { username, password } = (await req.json()) as LoginRequest;

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/userprofiles`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.ok) {
      const { token } = await response.json();
      return NextResponse.json({ token }, { status: 200 });
    } else {
      const error = await response.text();
      return NextResponse.json({ error }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
