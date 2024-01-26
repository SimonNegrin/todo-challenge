<script lang="ts">
  import { link, useLocation } from 'svelte-routing'
  import { getContext } from 'svelte'
  import type { SetNavigationLink } from './Navigation.svelte'

  const location = useLocation()
  const setNavigationLink: SetNavigationLink = getContext('setNavigationLink')

  export let href: string

  let anchorEl!: HTMLAnchorElement

  $: if (anchorEl && $location.pathname.startsWith(href)) {
    setNavigationLink(anchorEl)
  }

</script>

<a
  bind:this={anchorEl}
  class="flex items-center shrink-0"
  use:link
  {href}
  >
  <slot />
</a>
