import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient();
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
// in dev next initializes a new PrismaClient instance many times due to hot reloading
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;