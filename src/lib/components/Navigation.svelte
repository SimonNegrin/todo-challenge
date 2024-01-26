<script lang="ts" context="module">

  export type SetNavigationLink = (el: HTMLElement) => void

</script>

<script lang="ts">
  import { setContext } from 'svelte'
  import NavLink from './NavLink.svelte'

  let underlineEl: HTMLElement

  setContext('set-navigation-link', (el: HTMLElement) => {
    if (!underlineEl) return
    const left = el.offsetLeft
    const width = el.offsetWidth
    underlineEl.style.setProperty('width', `${width}px`)
    underlineEl.style.setProperty('left', `${left}px`)
    el.scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
  })

</script>

<nav
  class="relative h-12 px-2 w-full bg-white shadow overflow-auto flex gap-8 items-center scrollbar-hide"
  >
  <NavLink href="/">Mis datos</NavLink>
  <NavLink href="/">Mis tareas</NavLink>
  <NavLink href="/">Mis devoluciones</NavLink>
  <NavLink href="/">Mis comunicaciones</NavLink>
  <NavLink href="/">Mis mejores amigos</NavLink>
  <div
    bind:this={underlineEl}
    class="absolute bottom-0 bg-blue-500 rounded-t h-1 transition-all duration-100 touch-none pointer-events-none"
  ></div>
</nav>
