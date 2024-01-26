<script lang="ts">
  
  export let name: string | undefined = undefined
  export let value: string | undefined = undefined
  export let required = false

  let input: HTMLInputElement
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
    isInvalid = !input.validity.valid
    valueMissing = input.validity.valueMissing
  }

</script>

<div>
  <input
    bind:this={input}
    type="text"
    on:invalid={onInvalid}
    on:input={onInput}
    {name}
    bind:value
    {required}
    class="border rounded p-2 w-full outline-none"
    class:border-red-500={isInvalid}
    class:border-gray-300={!isInvalid}
    >
  {#if isInvalid}
    <slot name="invalid" />
  {/if}
  {#if valueMissing}
    <slot name="required" />
  {/if}
</div>
