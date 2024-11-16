

import { prisma } from "@/lib/db"
import Link from "next/link";
import ListMembre from "../components/ListMembre";

export default async function homeMember() {

    const membres = await prisma.poete.findMany({
        where: { idCollectif: 1 }, orderBy: {
            idPoete: "desc",

        }, take: 5

    });

    const deleteMember = (id: number | string) => {
        "use client";
        console.log(id);

    }

    return <>
        <div className="text-xl">liste des membres</div>
        <br />

        <p>

            <Link href={"/membre/new"} className="h-5 p-3 bg-blue-500">Ajouter un nouveau membre</Link>
        </p>

        <div className="m-5">
            {membres.map(membre => (
                <ListMembre membre={membre} />
            ))}
        </div>

    </>


}