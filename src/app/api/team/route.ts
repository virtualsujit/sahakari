import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

    console.log("memberType", memberType);

    const newTeamMember = await prisma.team.create({
      data: {
        fullName,
        position,
        memberType,
        profilePhoto,
        contactNumber,
        email,
      },
    });

    return NextResponse.json(newTeamMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    return NextResponse.json(
      { error: "Failed to create team member." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const role = searchParams.get("memberType");

  try {
    const teamMembers =
      role && role !== "all"
        ? await prisma.team.findMany({
            where: { memberType: role },
          })
        : await prisma.team.findMany();

    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { error: "Failed to fetch team members." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json(
      { error: "News article ID is required." },
      { status: 400 }
    );
  }

  try {
    const deletedNewsArticle = await prisma.team.delete({
      where: { id: id },
    });

    console.log("Deleted news article:", deletedNewsArticle);
    console.log(id, "id");

    return NextResponse.json(deletedNewsArticle);
  } catch (error) {
    console.error("Error deleting news article:", error);
    return NextResponse.json(
      { error: "Failed to delete news article." },
      { status: 500 }
    );
  }
}
