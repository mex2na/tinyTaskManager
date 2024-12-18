import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
    return new PrismaClient();
};

declare const globalThis: {
    prismaGlobal: ReturnType<typeof PrismaClientSingleton>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();



if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;