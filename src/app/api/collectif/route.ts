import { prisma } from "@/lib/db";

// interface Body {
//     nomCollectif: string
//     villeOrigine: string
//     email: string
//     tel: string
//     password: string
// }


export async function POST(req: Request) {

    // let body = await req.json()
    // console.log(body);

    let fromBody = await req.json()

    const newCollectif = await prisma.collectif.create({
        data: fromBody
    })

    return new Response(JSON.stringify(newCollectif))


}


export async function GET(req: Request) {

    const collectifs = await prisma.collectif.findMany()

    const params = new URL(req.url).searchParams


    return new Response(JSON.stringify(collectifs))


}