import type { Task } from '../../vite-env'

export async function getTasks(skip: number, take: number): Promise<Task[]> {
  const response = await fetch(import.meta.env.VITE_TASKS_API)
  const tasks = await response.json()
  return tasks.slice(skip, skip + take)
}
