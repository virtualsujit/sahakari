import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Busboy from "busboy";
import { Readable } from "stream";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing to use Busboy
  },
};

// Utility function to convert NextRequest to a readable stream
function reqToStream(req: NextRequest): Readable {
  const reader = req.body?.getReader();
  return new Readable({
    async read() {
      if (!reader) return this.push(null);
      const { done, value } = await reader.read();
      if (done) {
        this.push(null);
      } else {
        this.push(value);
      }
    },
  });
}

export async function POST(req: NextRequest) {
  const photos: Buffer[] = [];

  try {
    const bb = Busboy({
      headers: { "content-type": req.headers.get("content-type") || "" },
    });

    return new Promise<NextResponse>((resolve, reject) => {
      bb.on("file", (_, file) => {
        const buffers: Buffer[] = [];
        file.on("data", (data: Buffer) => buffers.push(data));
        file.on("end", () => photos.push(Buffer.concat(buffers)));
      });

      bb.on("finish", async () => {
        try {
          await prisma.photo.createMany({
            data: photos.map((photo) => ({ photo })),
          });
          resolve(
            NextResponse.json({ message: "Photos uploaded successfully" })
          );
        } catch (error) {
          console.error("Error saving photos to the database:", error);
          resolve(
            NextResponse.json({ error: "Error saving photos" }, { status: 500 })
          );
        }
      });

      reqToStream(req).pipe(bb);
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
