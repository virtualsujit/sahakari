import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const global: typeof globalThis & {
  prismaClient?: PrismaClient;
};

const prisma = global.prismaClient ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  global.prismaClient = prisma;
}

export default prisma;
