<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let time = 1_000
  export let size = 100

  const dispatch = createEventDispatcher()

  let timeout: number | null = null;
  let isHolding = false;

  function onPointerdown(event: PointerEvent): void {
    isHolding = true
    clear()
    const btn = event.currentTarget as HTMLButtonElement
    btn.setPointerCapture(event.pointerId)
    isHolding = true
    timeout = setTimeout(() => {
      isHolding = false
      dispatch("hold")
    }, time)
  }

  function onPointerup(event: PointerEvent): void {
    const btn = event.currentTarget as HTMLButtonElement
    btn.releasePointerCapture(event.pointerId)
    isHolding = false
    clear()
  }

  function clear(): void {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

</script>

<button
  type="button"
  class="relative touch-none"
  on:pointerdown={onPointerdown}
  on:pointerup={onPointerup}
  on:contextmenu|preventDefault
>
  <slot />
  {#if isHolding}
    <div class="circle" style="--size: {size}px; --duration: {time}ms;">
      <div class="circle__half"></div>
      <div class="circle__half circle__half--right"></div>
    </div>
  {/if}
</button>

<style>
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    height: var(--size);
    width: var(--size);
    transform: translate(-50%, -50%);
    display: inline-flex;
    overflow: hidden;
  }

  .circle__half {
    height: var(--size);
    width: calc(var(--size) / 2);
    position: relative;
    overflow: hidden;
  }

  .circle__half:before {
    height: inherit;
    width: inherit;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    border-radius: calc(var(--size) / 2) 0 0 calc(var(--size) / 2);
    background-color: #717171;
    transform-origin: 100% 50%;
    transform: rotate(180deg);
    opacity: 0.5;
    animation-name: rotate-circle-half;
    animation-duration: var(--duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .circle__half--right {
    transform: scale(-1, -1);
  }

  .circle .circle__half--right:before {
    animation-name: rotate-circle-half--right;
  }

  /* show half of circle half of the time */
  @keyframes rotate-circle-half {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-circle-half--right {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
