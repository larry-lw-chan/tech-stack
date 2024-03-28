<script lang="ts">
  import Thing from "./lib/Thing.svelte";

  interface Thing {
    id: number;
    name: string;
  }

  let things: Thing[] = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

<button on:click={handleClick}> Remove first thing </button>

<!-- (thing.id) speficifies the Component Key -- similar to React -->
{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}
