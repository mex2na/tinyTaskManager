"use server"

import { TaskDto } from "@/dto/TaskDto";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";



export async function addNewTaskAction(formData: FormData) {

    const newTask = await prisma.task.create({
        data: {
            task: formData.get("newTask") as string,
            isDone: false,
            idUser: 1
        }
    })


    revalidatePath("/task")

}


export async function updateTaskAction(task: TaskDto) {

    const taskUpdater = await prisma.task.update({
        data: {
            task: task.task,

        },
        where: {
            idTask: task.idTask
        }
    })


    revalidatePath("/task/" + task.idTask)

}

export async function toggleDoneAction(task: TaskDto) {

    const updateDoneState = await prisma.task.update({
        data: {
            isDone: !task.isDone
        },
        where: {
            idTask: task.idTask
        }
    })

    revalidatePath("task")

}

export async function deleteTaskAction(id: number) {
    const deleted = await prisma.task.delete({
        where: {
            idTask: id
        }
    })

    revalidatePath("task")
}

