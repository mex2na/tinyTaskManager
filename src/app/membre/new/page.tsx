

import { addMembre } from "@/actions/actions";
import { NewPoeteDto } from "@/dto/Membredto";
import { useState } from "react";
import toast from "react-hot-toast";

import MembreForm from "@/app/components/MembreForm";

/*
    ajouter un client 
    afficher un message de success ou d'erreur
    en cas de success rediriger vers la liste des membres !! non tampoka satria mety hampiditra membre maromaro ndray miaraka

*/

export default async function newMembre() {




    return <>
        <div className="text-xl">Nouveau membre</div>
        <MembreForm></MembreForm>


    </>


}