import { AddTaskForm } from "@/components/AddTaskForm"
import { TaskItem } from "@/components/TaskItem"
import { prisma } from "@/lib/db"




export default async function () {

    let tasks = await prisma.task.findMany({
        where: {
            idUser: 1
        },
        orderBy: {
            idTask: "desc"
        }
    })

    return <>


        <AddTaskForm></AddTaskForm>

        <ul className="flex-col items-start mt-5">

            {tasks.map(task => <TaskItem task={task} key={task.idTask}></TaskItem>)}

        </ul>



    </>


}