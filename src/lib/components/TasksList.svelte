<script lang="ts">
  import { onMount } from 'svelte'
  import type { Task } from '../../vite-env'
  import TaskItem from '../components/TaskItem.svelte'
  import { getTasks } from '../services/tasks'
  import Loading from '../components/Loading.svelte'
  import { link } from 'svelte-routing'
  
  const take = 3

  let skip = 0
  let tasks: Task[] = []
  let isLoading = false
  let hasMore = true

  onMount(loadTasks)

  async function loadTasks(): Promise<void> {
    if (isLoading) return
    isLoading = true
    try {
      const page = await getTasks(skip, take)
      hasMore = page.length === take
      tasks = [...tasks, ...page]
    } finally {
      isLoading = false
    }
  }

  async function loadMore(): Promise<void> {
    skip += take
    await loadTasks()
  }

</script>

<div class="relative h-full">
  <a
    use:link
    href="/my-tasks/create"
    class="bg-ta-green text-white shadow p-2 w-12 h-12 rounded-full text-center absolute bottom-16 right-4 flex justify-center items-center"
    >
    ✚
  </a>

  <div class="p-4 h-full overflow-auto">
    {#each tasks as task}
      <TaskItem {task} />
    {/each}

    {#if isLoading}
      <div class="flex justify-center items-center gap-4 my-4 text-ta-green">
        <Loading /> Cargando tareas...
      </div>
    {:else if hasMore}
      <button
        type="button"
        class="bg-ta-green text-white rounded-lg shadow p-2 w-full"
        on:click={loadMore}
        >
        Cargar más
      </button>
    {/if}
  </div>
</div>