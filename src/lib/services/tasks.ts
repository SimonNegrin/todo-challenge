import type { Task } from '../../vite-env'

let tasks: Task[] | null = null

export async function getTasks(skip: number, take: number): Promise<Task[]> {
  const tasks = await getAllTasks()
  return tasks.slice(skip, skip + take)
}

export async function createTask(title: string, description: string): Promise<Task> {
  const tasks = await getAllTasks()
  const highId = Math.max(...tasks.map(task => task.id))
  const task: Task = {
    id: highId + 1,
    userId: 1,
    title,
    description,
    completed: false,
  }
  tasks.unshift(task)
  return task
}

export async function deleteTask(taskId: number): Promise<void> {
  const tasks = await getAllTasks()
  const index = tasks.findIndex(task => task.id === taskId)
  if (index === -1) {
    throw new Error(`Task with id ${taskId} not found`)
  }
  tasks.splice(index, 1)
}

async function getAllTasks(): Promise<Task[]> {
  if (!tasks) {
    const response = await fetch(import.meta.env.VITE_TASKS_API)
    tasks = await response.json()
  }
  return tasks as Task[]
}
