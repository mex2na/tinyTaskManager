import { prisma } from "@/lib/db"
import Link from "next/link";

export default async function homeMember() {

    const membres = await prisma.poete.findMany({
        where: { idCollectif: 1 }
    });

    return <>
        <div className="text-xl">liste des membres</div>

        <div>
            {membres.map(membre => (
                <div className="flex bg-red-300 w-full justify-between mb-5 p-2">
                    <div>
                        {membre.prenomPoete}

                    </div>
                    <div className="flex gap-2">
                        <Link href={`/membre/${membre.idPoete}`} className="p-2 bg-blue-500 ">Modifier</Link>
                        <Link href={`/membre/${membre.idPoete}`} className="p-2 bg-red-500">Delete</Link>
                    </div>
                </div>))}
        </div>

    </>


}