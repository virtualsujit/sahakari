import { NextResponse } from "next/server";
import prisma from "@/utils/prisma"; // Adjust this path according to your project structure

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required." }, { status: 400 });
    }

    // Create a new popup photo entry
    const newPopupPhoto = await prisma.popupPhoto.create({
      data: {
        url,
      },
    });

    return NextResponse.json(newPopupPhoto, { status: 201 });
  } catch (error) {
    console.error("Error creating popup photo:", error);
    return NextResponse.json(
      { error: "Failed to create popup photo." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const photos = await prisma.popupPhoto.findMany();

    return NextResponse.json(photos, { status: 200 });
  } catch (error) {
    console.error("Error fetching popup photos:", error);
    return NextResponse.json(
      { error: "Failed to fetch popup photos." },
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
        { error: "Popup photo ID is required." },
        { status: 400 }
      );
    }

    // Delete the specified popup photo entry
    const deletedPopupPhoto = await prisma.popupPhoto.delete({
      where: { id },
    });

    console.log("Deleted popup photo:", deletedPopupPhoto);

    return NextResponse.json(deletedPopupPhoto, { status: 200 });
  } catch (error) {
    console.error("Error deleting popup photo:", error);
    return NextResponse.json(
      { error: "Failed to delete popup photo." },
      { status: 500 }
    );
  }
}
