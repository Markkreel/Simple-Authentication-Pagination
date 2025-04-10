import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { initializeDatabase } from "@/lib/init-db";

export async function POST(req: NextRequest) {
  try {
    // Initialize database connection
    await initializeDatabase();
    const body = await req.json();
    const { email, password } = body;

    // Ensure database is connected
    if (!db.isConnected()) {
      throw new Error("Database not connected");
    }

    // Verify user credentials
    const user = await db.verifyUser(email, password);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: "Login successful", user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
