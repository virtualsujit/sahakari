import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";  

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, date, thumbnail } = body;

    // Validate required fields
    if (!title || !content || !date) {
      return NextResponse.json(
        { error: "Title, content, and date are required." },
        { status: 400 }
      );
    }

    const newNewsArticle = await prisma.news.create({
      data: {
        title,
        content,
        date: date, // Ensure date is in Date format
        imageUrl: thumbnail,
      },
    });

    return NextResponse.json(newNewsArticle, { status: 201 });
  } catch (error) {
    console.error("Error creating news article:", error);
    return NextResponse.json(
      { error: "Failed to create news article." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  try {
    const newsArticles = date
      ? await prisma.news.findMany({
          where: {
            date: date,
          },
        })
      : await prisma.news.findMany();

    return NextResponse.json(newsArticles, { status: 200 });
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch news articles." },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, content, date, thumbnail } = body;

    if (!id || !title || !content || !date) {
      return NextResponse.json(
        { error: "ID, title, content, and date are required." },
        { status: 400 }
      );
    }

    const updatedNewsArticle = await prisma.news.update({
      where: { id: parseInt(id) },
      data: {
        title,
        content,
        date: date,
        imageUrl: thumbnail,
      },
    });

    return NextResponse.json(updatedNewsArticle, { status: 200 });
  } catch (error) {
    console.error("Error updating news article:", error);
    return NextResponse.json(
      { error: "Failed to update news article." },
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
        { error: "News article ID is required." },
        { status: 400 }
      );
    }

    const deletedNewsArticle = await prisma.news.delete({
      where: { id: parseInt(id) }, // Ensure id is a number
    });

    return NextResponse.json(deletedNewsArticle, { status: 200 });
  } catch (error) {
    console.error("Error deleting news article:", error);
    return NextResponse.json(
      { error: "Failed to delete news article." },
      { status: 500 }
    );
  }
}
