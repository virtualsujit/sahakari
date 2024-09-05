import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Instantiate Prisma Client once to reuse across requests
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Enable logging for debugging
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      position,
      memberType,
      profilePhoto,
      contactNumber,
      email,
    } = body;

    // Basic input validation
    if (!fullName || !email || !position || !memberType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new team member
    const newTeamMember = await prisma.team.create({
      data: {
        fullName,
        position,
        memberType,
        profilePhoto,
        contactNumber,
        email: email.toLowerCase(), // Normalize email
      },
    });

    return NextResponse.json(newTeamMember, { status: 201 });
  } catch (error: any) {
    console.error("Error creating team member:", error.message || error);
    return NextResponse.json(
      { error: "Failed to create team member." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("memberType");

    // Fetch team members based on role filter, or fetch all if no role is provided
    const teamMembers =
      role && role !== "all"
        ? await prisma.team.findMany({
            where: { memberType: role },
          })
        : await prisma.team.findMany();

    return NextResponse.json(teamMembers, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching team members:", error.message || error);
    return NextResponse.json(
      { error: "Failed to fetch team members." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    // Validate ID presence
    if (!id) {
      return NextResponse.json(
        { error: "Team member ID is required." },
        { status: 400 }
      );
    }

    // Delete the team member by ID
    const deletedTeamMember = await prisma.team.delete({
      where: { id: id },
    });

    return NextResponse.json(deletedTeamMember, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting team member:", error.message || error);
    return NextResponse.json(
      { error: "Failed to delete team member." },
      { status: 500 }
    );
  }
}
