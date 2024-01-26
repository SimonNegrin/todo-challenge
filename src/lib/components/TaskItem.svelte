<script lang="ts">
  import type { Task } from '../../vite-env'
  import TrashIcon from './icons/TrashIcon.svelte'

  export let task: Task

</script>

<div class="bg-white rounded-lg shadow mb-4 p-4 flex items-center">
  <div class="grow">
    <h3 class="text-lg text-gray-700">{task.title}</h3>
    <p class="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, exercitationem? Repellendus labore fugiat eaque possimus ipsa quidem velit architecto officia minima adipisci iusto iste itaque, distinctio, necessitatibus vitae autem similique.</p>
  </div>
  <button type="button">
    <TrashIcon />
  </button>
</div>
