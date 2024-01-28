<script lang="ts">

  export let title = '⚠️ Ha ocurrido un error:'

</script>
<div class="bg-white border border-red-500 rounded-lg shadow p-4 text-sm mb-4">
  <div class="text-red-400">{title}</div>
  <slot />
</div>
