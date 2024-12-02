"use client";


import { deleteTaskAction, toggleDoneAction } from "@/actions/actions";
import { TaskDto } from "@/dto/TaskDto"
import Link from "next/link"
import toast from "react-hot-toast";


export const TaskItem = ({ task }: {
    task: TaskDto
}) => {


    let toggleDone = (taskToUpdate: TaskDto) => {
        toggleDoneAction(taskToUpdate).then(data => {
            toast.success("Task updated !! ")
        })
    }

    let deleteTask = (id: number) => {
        deleteTaskAction(id).then(data => {
            toast.success("Task deleted !!")
        })
    }

    return <div className="flex justify-between w-96">

        <div className={task.isDone ? "line-through" : ""}>
            <input type="checkbox" checked={task.isDone} onChange={() => toggleDone(task)} /> | {task.task}
        </div>

        <div>
            <Link href={"/task/" + task.idTask}>update</Link> | <button onClick={() => deleteTask(task.idTask)}>x</button>
        </div>


    </div>


}