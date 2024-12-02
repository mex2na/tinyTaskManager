import { UpdateTaskForm } from "@/components/UpdateTaskForm"
import { TaskDto } from "@/dto/TaskDto"
import { prisma } from "@/lib/db"
import { useParams } from "next/navigation"


export default async function ({ params }: {
    params: { id: number }
}) {
    const { id } = await params
    const taskToUptade = await prisma.task.findUnique({
        where: {
            idTask: +id
        }
    })

    return <>

        <UpdateTaskForm task={taskToUptade as TaskDto}></UpdateTaskForm>

    </>


}