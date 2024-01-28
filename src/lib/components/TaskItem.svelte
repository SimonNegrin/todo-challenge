<script lang="ts">
  import type { Task } from '../../vite-env'
  import TrashIcon from './icons/TrashIcon.svelte'
  import { deleteTask } from '../services/tasks'
  import { createEventDispatcher } from 'svelte'
  import { fly, slide } from 'svelte/transition'
    import HoldBtn from './HoldBtn.svelte';

  const dispatch = createEventDispatcher()

  export let task: Task

  async function onRemove(): Promise<void> {
    await deleteTask(task.id)
    dispatch('removed', task)
  }

</script>

<div
  class="mb-4"
  out:slide={{ delay: 200 }}
  >
  <div
    class="bg-white rounded-lg shadow p-4 flex items-center"
    out:fly={{ x: -100, duration: 200 }}
    >
    <div class="grow">
      <h3 class="text-lg text-gray-700">{task.title}</h3>
      <p class="text-sm text-gray-500">{task.description}</p>
    </div>
    <HoldBtn on:hold={onRemove}>
      <TrashIcon />
    </HoldBtn>
  </div>
</div>
