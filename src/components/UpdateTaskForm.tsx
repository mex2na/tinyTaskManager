
"use client";

import { addNewTaskAction, updateTaskAction } from "@/actions/actions";
import { TaskDto } from "@/dto/TaskDto";
import { log } from "console";
import { useState } from "react";
import toast from "react-hot-toast";


export const UpdateTaskForm = ({ task }: {
    task: TaskDto
}) => {

    let [taskToUpdate, setTU] = useState(task)

    const updateTask = () => {



        updateTaskAction(taskToUpdate).then(data => {
            toast.success("Task updated !")
        })


    }

    return <form action={() => updateTask()} children={

        <input type="text" value={taskToUpdate.task} onChange={(e) => setTU({ ...taskToUpdate, task: e.target.value })} className="text-black rounded-sm focus:border-inherit" name="task" />


    } />



}