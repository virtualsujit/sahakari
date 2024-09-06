import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching users:", error.message || error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
