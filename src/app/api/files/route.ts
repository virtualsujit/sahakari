import { NextResponse } from "next/server";
import prisma from "@/utils/prisma"; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    // Validate required fields
    if (!url) {
      return NextResponse.json(
        { error: "URL is required." },
        { status: 400 }
      );
    }

    const newFile = await prisma.files.create({
      data: {
        url,
      },
    });

    return NextResponse.json(newFile, { status: 201 });
  } catch (error: any) {
    console.error("Error creating file record:", error.message || error);
    return NextResponse.json(
      { error: "Failed to create file record." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const files = await prisma.files.findMany();

    return NextResponse.json(files, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching files:", error.message || error);
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

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { error: "File ID is required." },
        { status: 400 }
      );
    }

    const deletedFile = await prisma.files.delete({
      where: { id },
    });

    return NextResponse.json(deletedFile, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting file record:", error.message || error);
    return NextResponse.json(
      { error: "Failed to delete file record." },
      { status: 500 }
    );
  }
}
