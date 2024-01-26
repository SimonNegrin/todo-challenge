<script lang="ts">
  import InputText from './form/InputText.svelte'
  import Textarea from './form/Textarea.svelte'

  let title = ''
  let description = ''

  async function onSubmit(event: SubmitEvent): Promise<void> {
    const form = event.target as HTMLFormElement
    if (!form.checkValidity()) {
      return
    }
    console.log({ title, description })
  }

</script>

<div class="p-4">
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
      <a class="inline-block px-2 py-1 rounded bg-red-600 text-white" href="/my-tasks">Cancelar</a>
      <button
        type="submit"
        class="inline-block px-2 py-1 rounded bg-ta-green text-white"
        >Guardar</button>
    </div>
  </form>
</div>
