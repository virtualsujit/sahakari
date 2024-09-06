import { NextResponse } from "next/server";
import prisma from "@/utils/prisma"; // Ensure this path is correct for your setup

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

    if (!fullName || !email || !position || !memberType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newTeamMember = await prisma.team.create({
      data: {
        fullName,
        position,
        memberType,
        profilePhoto,
        contactNumber,
        email: email.toLowerCase(),
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
    const memberType = searchParams.get("memberType");

    const teamMembers =
      memberType && memberType !== "all"
        ? await prisma.team.findMany({
            where: { memberType },
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

    if (!id) {
      return NextResponse.json(
        { error: "Team member ID is required." },
        { status: 400 }
      );
    }

    const deletedTeamMember = await prisma.team.delete({
      where: { id },
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
