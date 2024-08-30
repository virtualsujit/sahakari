-- CreateTable
CREATE TABLE "PopupPhoto" (
    "id" TEXT NOT NULL,
    "url" JSONB NOT NULL DEFAULT '[]',

    CONSTRAINT "PopupPhoto_pkey" PRIMARY KEY ("id")
);
