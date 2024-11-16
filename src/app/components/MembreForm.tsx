"use client";

import { addMembre } from "@/actions/actions";
import toast from "react-hot-toast";


export default function MembreForm() {


    return <>
        <form action={async (data: FormData) => {

            const action = await addMembre(data)

            console.log(action);

            if (action.e) {
                toast.error(action.message)
            } else {
                toast.success(action.message)
            }


        }} >
            <div className="p-3 flex w-80 justify-between">
                <strong>Name</strong>
                <input type="text" name="nomPoete" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>First-name</strong>
                <input type="text" name="prenomPoete" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>Pseudo</strong>
                <input type="text" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" name="pseudo" required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>Tel</strong>
                <input type="tel" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" name="telPoete" required />
            </div>

            <div className="p-3 flex w-80 justify-between">
                <strong>Birth</strong>
                <input type="date" className="shadow-sm shadow-slate-400 rounded-sm focus:border-none" name="dateNaissance" required />
            </div>

            <button className="p-3 bg-blue-500 rounded-sm " >Save</button>



        </form>

    </>


}