<script lang="ts">
  import { getContext } from 'svelte'
  import type { SetNavigationLink } from './Navigation.svelte'

  export let href: string

  const setNavigationLink: SetNavigationLink = getContext('set-navigation-link')

  function onClick(event: MouseEvent): void {
    setNavigationLink(event.target as HTMLElement)
  }

</script>

<a class="flex items-center shrink-0" {href} on:click|preventDefault={onClick}>
  <slot />
</a>
