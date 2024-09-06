import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id, email, role } = await request.json();

    console.log("Creating user:", id, email, role);

    const existingUser = await prisma.user.findUnique({
      where: { id: id },
    });

    console.log("Existing user:", existingUser);

    if (existingUser) {
      return NextResponse.json({ error: "User already exists." });
    }

    const newUser = await prisma.user.create({
      data: {
        id,
        email: email.toLowerCase(),
        role,
      },
    });

    console.log("New user created:", newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Invalid User Id." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching user:", error.message || error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { id, role } = await request.json();

    if (!id || !role) {
      return NextResponse.json(
        { error: "Missing fields: id and role are required." },
        { status: 400 }
      );
    }

    if (typeof role !== "string") {
      return NextResponse.json(
        { error: "Invalid data type for role." },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: { role },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error: any) {
    console.error("Error updating user role:", error.message || error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
