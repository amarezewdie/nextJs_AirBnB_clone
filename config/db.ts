import { PrismaClient } from "@prisma/client";

// Singleton factory for PrismaClient
const PrismaClientSingleton = () => {
  return new PrismaClient();
};

// The type of the PrismaClientSingleton function
type PrismaClientSingleton = ReturnType<typeof PrismaClientSingleton>;

// Global object to store Prisma Client instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Using existing Prisma instance if it exists, otherwise create a new one
const prisma = globalForPrisma.prisma ?? new PrismaClient(); // Fix: Instantiate PrismaClient directly if not found

// Store Prisma instance globally for development to prevent multiple instances
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
