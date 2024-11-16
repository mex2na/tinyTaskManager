"use client";

import { addMembre, updateMembreAction } from "@/actions/actions";
import { UpdatePoeteDto } from "@/dto/Membredto";
import toast from "react-hot-toast";
import UpdateMembre from "./UpdateMembre";



export default function MembreFormUpdate({ membre, onSave }: {
    membre: UpdatePoeteDto | null,
    onSave: Function
}) {


    return <>
        <form action={async (data: FormData) => {

            const action = await updateMembreAction(data, +membre.idPoete)

            console.log(action);

            if (action.e) {
                toast.error(action.message)
                onSave()

            } else {
                toast.success(action.message)
            }


        }} >
            <div className="p-3 flex w-80 justify-between">
                <strong>Name</strong>
                <input type="text" name="nomPoete" defaultValue={membre?.nomPoete} className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>First-name</strong>
                <input type="text" name="prenomPoete" defaultValue={membre?.prenomPoete} className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>Pseudo</strong>
                <input type="text" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" name="pseudo" defaultValue={membre?.pseudo} required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>Tel</strong>
                <input type="tel" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" name="telPoete" defaultValue={membre?.telPoete} required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>Birth</strong>
                <input type="date" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" name="dateNaissance" defaultValue={membre?.dateNaissance} required />
            </div>

            <button className="p-3 bg-blue-500 rounded-sm " >Save</button>



        </form>

    </>


}