import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { initializeDatabase } from "@/lib/init-db";

export async function POST(req: NextRequest) {
  try {
    // Initialize database connection
    await initializeDatabase();
    const body = await req.json();
    const { firstName, lastName, username, email, password } = body;

    // Ensure database is connected
    if (!db.isConnected()) {
      throw new Error('Database not connected');
    }

    // Create user
    const user = await db.createUser({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);

    if (error.message.includes("UNIQUE constraint failed")) {
      return NextResponse.json(
        { error: "Email or username already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}