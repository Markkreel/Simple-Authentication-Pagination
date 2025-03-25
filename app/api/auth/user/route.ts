import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { initializeDatabase } from "@/lib/init-db";

export async function GET(req: NextRequest) {
  try {
    // Initialize database connection
    await initializeDatabase();

    // Ensure database is connected
    if (!db.isConnected()) {
      throw new Error("Database not connected");
    }

    // Get user data from session
    const user = await db.getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
