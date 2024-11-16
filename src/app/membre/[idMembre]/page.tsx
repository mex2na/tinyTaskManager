import { prisma } from "@/lib/db";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Suspense } from "react";
import UpdateMembre from "@/app/components/UpdateMembre";
export default async function membreUnique({ params }: {
    params: {
        idMembre: number
    }
}) {

    const p = await params;
    const membreToUpdate = await prisma.poete.findUnique({
        where: {
            idPoete: +p.idMembre
        }
    })

    console.log(membreToUpdate);





    return <>
        <Suspense>
            <UpdateMembre membre={membreToUpdate}></UpdateMembre>
        </Suspense>

    </>


}