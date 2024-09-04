import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    const newFile = await prisma.files.create({
      data: {
        url,
      },
    });

    return NextResponse.json(newFile);
  } catch (error) {
    console.error("Error creating file record:", error);
    return NextResponse.json(
      { error: "Failed to create file record." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const files = await prisma.files.findMany();

    console.log(files ,"fielse jdfasfdhasjfhasdfhaksdfhkasdhfksdf");
    return NextResponse.json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json(
      { error: "Failed to fetch files." },
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
        { error: "File ID is required." },
        { status: 400 }
      );
    }

    const deletedFile = await prisma.files.delete({
      where: { id },
    });

    return NextResponse.json(deletedFile);
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json(
      { error: "Failed to delete file." },
      { status: 500 }
    );
  }
}
