<script lang="ts" context="module">

  export type SetNavigationLink = (el: HTMLElement) => void

</script>

<script lang="ts">
  import { setContext } from 'svelte'
  import NavLink from './NavLink.svelte'

  let underlineEl: HTMLElement

  setContext('setNavigationLink', (el: HTMLElement) => {
    if (!underlineEl) return
    const left = el.offsetLeft
    const width = el.offsetWidth
    underlineEl.style.setProperty('width', `${width}px`)
    underlineEl.style.setProperty('left', `${left}px`)
    el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
  })

</script>

<nav
  class="relative h-12 shrink-0 px-2 w-full bg-white shadow overflow-auto flex gap-8 items-center scrollbar-hide z-10"
  >
  <NavLink href="/my-data">Mis datos</NavLink>
  <NavLink href="/my-tasks">Mis tareas</NavLink>
  <NavLink href="/my-returns">Mis devoluciones</NavLink>
  <NavLink href="/my-comunications">Mis comunicaciones</NavLink>
  <NavLink href="/my-best-friends">Mis mejores amigos</NavLink>
  <div
    bind:this={underlineEl}
    class="absolute bottom-0 bg-ta-green rounded-t h-1 transition-all duration-100 touch-none pointer-events-none"
  ></div>
</nav>
