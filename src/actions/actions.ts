"use server"

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";


export async function addMembre(formData: FormData) {

    try {

        const newMember = await prisma.poete.create({
            data: {
                nomPoete: formData.get("nomPoete") as string,
                prenomPoete: formData.get("prenomPoete") as string,
                pseudo: formData.get("pseudo") as string,
                telPoete: formData.get("telPoete") as string,
                dateNaissance: formData.get("dateNaissance") as string,
                idCollectif: 1

            }
        })



        return {
            message: `New member added with success!!`
        }
    } catch (error) {
        return {
            e: error,
            message: "An error occured !!!"
        }
    }



}


export async function updateMembreAction(formData: FormData, idPoete: number) {

    try {

        const newMember = await prisma.poete.update({
            where: {
                idPoete: idPoete
            },
            data: {
                nomPoete: formData.get("nomPoete") as string,
                prenomPoete: formData.get("prenomPoete") as string,
                pseudo: formData.get("pseudo") as string,
                telPoete: formData.get("telPoete") as string,
                dateNaissance: formData.get("dateNaissance") as string,


            }
        })


        revalidatePath("/membre/" + idPoete)

        return {
            message: `Member info updated successfully!!`
        }
    } catch (error) {
        return {
            e: error,
            message: "An error occured !!!"
        }
    }



}



export async function deleteMemberAction(id: number | string) {

    try {

        const d = await prisma.poete.delete({
            where: {
                idPoete: +id
            }
        })

        revalidatePath("/membre")

        return {
            message: "Member deleted !!"
        }

    } catch (error) {
        return {
            e: error,
            message: "An error is occured!!"
        }
    }

}