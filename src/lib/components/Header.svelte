<script>
  import CartIcon from './icons/CartIcon.svelte'
  import MenuIcon from './icons/MenuIcon.svelte'
  import SearchIcon from './icons/SearchIcon.svelte'
  import UserIcon from './icons/UserIcon.svelte'

</script>
<header class="bg-white h-12 shrink-0 border-b flex items-center gap-2 p-2">
  <MenuIcon />
  <SearchIcon />
  <div class="grow flex justify-center">
    <img class="" src="/images/logo.svg" alt="TiendaAnimal">
  </div>
  <UserIcon />
  <CartIcon />
</header>
