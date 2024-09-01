import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, date, thumbnail } = body;

    const newNewsArticle = await prisma.news.create({
      data: {
        title,
        content,
        date: date,
        imageUrl:thumbnail,
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

    return NextResponse.json(newsArticles);
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch news articles." },
      { status: 500 }
    );
  }
}
