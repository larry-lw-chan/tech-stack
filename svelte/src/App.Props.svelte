<script>
  import Nested from "./lib/Nested.svelte";
  import PackageInfo from "./lib/PackageInfo.svelte";

  const pkg = {
    name: "svelte",
    version: 4,
    speed: "blazing",
    website: "https://svelte.dev",
  };

  // Quick counter example
  let count = 0;
  const increment = () => (count += 1);
</script>

<section>
  <Nested answer={"42"} />
  <Nested />
</section>

<section>
  <!-- // Notice how we can pass in the props in any order  -->
  <PackageInfo {...pkg} />
</section>

<section>
  <h2>Counter</h2>
  {#if count > 10}
    <p>{count} is greater than 10</p>
  {:else if count < 5}
    <p>{count} is between 0 and 5</p>
  {:else}
    <p>{count} is between 5 and 10</p>
  {/if}
  <button on:click={increment}>Increment</button>
</section>
