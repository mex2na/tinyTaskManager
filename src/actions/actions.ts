"use server";

import { prisma } from "@/lib/db";


export async function createTournoi(formData: FormData) {

    const newTournoi = await prisma.tournoi.create({
        data: { nomTournoi: formData.get("nomTournoi") as string }
    })

}

