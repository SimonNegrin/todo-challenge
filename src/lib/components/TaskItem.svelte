<script lang="ts">
  import type { Task } from '../../vite-env'
  import TrashIcon from './icons/TrashIcon.svelte'

  export let task: Task

</script>

<div class="bg-white rounded-lg shadow mb-4 p-4 flex items-center">
  <div class="grow">
    <h3 class="text-lg text-gray-700">{task.title}</h3>
    <p class="text-sm text-gray-500">
      {#if 'description' in task}
        {task.description}
      {:else}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur veritatis accusamus fugiat saepe laboriosam quam, nobis quae odio, eligendi odit deserunt soluta sunt itaque veniam distinctio repudiandae? Doloremque, deserunt.
      {/if}
    </p>
  </div>
  <button type="button">
    <TrashIcon />
  </button>
</div>
