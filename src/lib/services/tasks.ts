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

async function getAllTasks(): Promise<Task[]> {
  if (!tasks) {
    const response = await fetch(import.meta.env.VITE_TASKS_API)
    tasks = await response.json()
  }
  return tasks as Task[]
}
