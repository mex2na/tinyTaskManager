
/*

* liste des membres du collectif
* ajouter un membre
* voir les info d'un poete en particulier, après les modifier
* supprimer un membres


*/

import { NewPoeteDto } from "@/dto/Membredto";
import { prisma } from "@/lib/db";



export async function POST(req: Request) {

    try {
        let body: NewPoeteDto = await req.json()


        let newMembre = await prisma.poete.create({
            data: body
        })

        return Response.json(newMembre);

    } catch (error) {

        throw error



    }





}


export async function GET(req: Request) {

    console.log(req);


    return Response.json("great job!!");

}