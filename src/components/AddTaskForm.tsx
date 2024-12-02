
"use client";

import { addNewTaskAction } from "@/actions/actions";
import { log } from "console";
import toast from "react-hot-toast";


export const AddTaskForm = () => {
    const addNewTask = (e: FormData) => {



        addNewTaskAction(e).then(data => {
            toast.success("Task added !")
        })


    }

    return <form action={(e) => addNewTask(e)} children={

        <input type="text" placeholder="new task..." className="text-black rounded-sm focus:border-inherit" name="newTask" />


    } />



}