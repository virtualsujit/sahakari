import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("description") as string;
    const date = formData.get("date") as string;

    const newArticle = await prisma.news.create({
      data: { title, content, date },
    });

    const photos = formData.getAll("photos") as File[];

    const photoPromises = photos.map(async (photo) => {
      const { data, error } = await supabase.storage
        .from("your-bucket-name")
        .upload(`photos/${newArticle.id}/${photo.name}`, photo);

      if (error) throw error;

      const publicUrl = supabase.storage
        .from("your-bucket-name")
        .getPublicUrl(`photos/${newArticle.id}/${photo.name}`).data.publicUrl;

      return prisma.photo.create({
        data: {
          photo: Buffer.from(await photo.arrayBuffer()),
          news: { connect: { id: newArticle.id } },
          album: null,
        },
      });
    });

    await Promise.all(photoPromises);

    return NextResponse.json(newArticle);
  } catch (error) {
    console.error("Error saving news article:", error);
    return NextResponse.json(
      { error: "Failed to save news article" },
      { status: 500 }
    );
  }
}
