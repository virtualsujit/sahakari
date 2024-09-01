-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "memberType" TEXT NOT NULL,
    "profilePhoto" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);
