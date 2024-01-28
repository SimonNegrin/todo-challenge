<script lang="ts">
  import InputText from './form/InputText.svelte'
  import Textarea from './form/Textarea.svelte'
  import { createTask } from '../services/tasks'
  import { link, navigate } from 'svelte-routing'
  import ErrorMessage from './ErrorMessage.svelte'

  let isCreating = false
  let title = ''
  let description = ''
  let errorMessage = ''

  async function onSubmit(event: SubmitEvent): Promise<void> {
    const form = event.target as HTMLFormElement
    if (!form.checkValidity()) {
      return
    }
    if (isCreating) return
    isCreating = true
    try {
      await createTask(title, description)
      navigate('/my-tasks')
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message
      } else {
        errorMessage = 'Error desconocido'
      }
    } finally {
      isCreating = false
    }
  }

</script>

<div class="p-4">

  {#if errorMessage}
    <ErrorMessage>{errorMessage}</ErrorMessage>
  {/if}

  <form
    on:submit|preventDefault={onSubmit}
    novalidate
    class="bg-white shadow p-4 rounded"
    >
    <div class="mb-4">
      <div class="text-sm">Título</div>
      <InputText required bind:value={title}>
        <div
          slot="required"
          class="text-red-500 text-sm"
          >Este campo es requerido</div>
      </InputText>
    </div>
    <div class="mb-4">
      <div class="text-sm">Descripción</div>
      <Textarea required bind:value={description}>
        <div
          slot="required"
          class="text-red-500 text-sm"
          >Este campo es requerido</div>
      </Textarea>
    </div>
    <div class="flex justify-between">
      <a
        use:link
        class="inline-block px-2 py-1 rounded bg-red-600 text-white"
        href="/my-tasks">Cancelar</a>
      <button
        type="submit"
        disabled={isCreating}
        class="inline-block px-2 py-1 rounded bg-ta-green text-white disabled:opacity-50"
        >{isCreating ? 'Guardando...' : 'Guardar'}</button>
    </div>
  </form>
</div>
