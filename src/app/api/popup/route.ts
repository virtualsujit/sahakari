import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    const newNewsArticle = await prisma.popupPhoto.create({
      data: {
        url,
      },
    });

    return NextResponse.json(newNewsArticle);
  } catch (error) {
    console.error("Error creating news article:", error);
    return NextResponse.json(
      { error: "Failed to create news article." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.popupPhoto.findMany();

    return NextResponse.json(data);
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
      const deletedNewsArticle = await prisma.popupPhoto.delete({
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
  
