/// <reference types="svelte" />
/// <reference types="vite/client" />

export interface Task {
  userId: number
  id: number
  title: string
  description?: string
  completed: boolean
}
