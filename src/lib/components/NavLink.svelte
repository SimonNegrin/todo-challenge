<script lang="ts">
  import { link, useLocation } from 'svelte-routing'
  import { getContext } from 'svelte'
  import type { SetNavigationLink } from './Navigation.svelte'

  const location = useLocation()
  const setNavigationLink: SetNavigationLink = getContext('setNavigationLink')

  export let href: string

  let anchorEl!: HTMLAnchorElement
  let isActive = false

  $: isActive = $location.pathname.startsWith(href)
  
  $: if (anchorEl && isActive) {
    setNavigationLink(anchorEl)
  }

</script>

<a
  bind:this={anchorEl}
  class="flex items-center shrink-0 transition-colors px-1 py-2"
  class:text-ta-green={isActive}
  use:link
  {href}
  >
  <slot />
</a>
