<script lang="ts">
  
  export let name: string | undefined = undefined
  export let value: string | undefined = undefined
  export let required = false

  let textArea: HTMLTextAreaElement
  let isInvalid = false
  let validityCheck = false
  let valueMissing = false

  function onInvalid(): void {
    validityCheck = true
    reportValidity()
  }

  function onInput(): void {
    if (validityCheck) {
      reportValidity()
    }
  }

  function reportValidity(): void {
    isInvalid = !textArea.validity.valid
    valueMissing = textArea.validity.valueMissing
  }

</script>

<div>
  <textarea
    bind:this={textArea}
    on:invalid={onInvalid}
    on:input={onInput}
    {name}
    bind:value
    {required}
    class="border rounded p-2 w-full outline-none"
    class:border-red-500={isInvalid}
    class:border-gray-300={!isInvalid}
    />
  {#if isInvalid}
    <slot name="invalid" />
  {/if}
  {#if valueMissing}
    <slot name="required" />
  {/if}
</div>
