"use client"

import { deleteMemberAction } from "@/actions/actions"
import Link from "next/link"
import toast from "react-hot-toast"

export default function ListMembre({ membre }: {
    membre: {
        idPoete: string | number,
        prenomPoete: string,
        pseudo: string
    }
}) {

    const deleteMembre = async (id: number | string) => {
        console.log(id);

        let log = await deleteMemberAction(id)

        if (log.e) {
            toast.error(log.message)
        } else {
            toast.success(log.message)
        }

    }

    return <>
        <div className="flex bg-red-300 w-full justify-between mb-5 p-2" key={membre.idPoete}>
            <div>
                {membre.prenomPoete} ({membre.pseudo})

            </div>
            <div className="flex gap-2">
                <Link href={`/membre/${membre.idPoete}`} className="p-2 bg-blue-500 ">?</Link>

                <button className="p-2 bg-red-500" onClick={() => deleteMembre(membre.idPoete)}>

                    Delete
                </button>

            </div>
        </div>
    </>



}