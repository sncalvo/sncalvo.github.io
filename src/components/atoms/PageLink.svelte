<script lang="ts">
  export let name: string;
  export let link: string;
</script>

<li class="flex z-10">
  <a href={link} class="primary-actionable w-full relative group">
    <span>{name}</span>
    <div
      class="h-full w-full border border-secondary-500 absolute opacity-0 rounded pointer-events-none top-0 left-0 group-hover:top-2 group-hover:left-2 group-hover:opacity-100 transition-all delay-200"
    />
  </a>
</li>
