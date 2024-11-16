"use client";

import { UpdatePoeteDto } from "@/dto/Membredto";
import { useState } from "react";
import MembreFormUpdate from "./MembreFormUpdate";




export default function UpdateMembre({ membre }: {
    membre: UpdatePoeteDto | null
}) {

    let [updateMode, setUpdateMode] = useState(false)




    return <>
        {!updateMode ?
            <>
                <div>Image...</div>
                <div className="text-xl">{`${membre?.nomPoete} ${membre?.prenomPoete} (${membre?.pseudo})`}</div>

                <p>Né le  {membre?.dateNaissance.toString()}</p>
                <p>Tel:  {membre?.telPoete}</p>

                <button className="bg-blue-500 p-3" onClick={() => setUpdateMode(true)}>
                    Modifier information
                </button>



            </>

            :


            <>
                <MembreFormUpdate membre={membre} onSave={() => alert("ok")}></MembreFormUpdate>
            </>}

    </>


}