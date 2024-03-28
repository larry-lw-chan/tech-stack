<script lang="ts">
  import Nested from "./lib/Nested.svelte";

  // Use Plain Declaration to create state "like React useState()""
  // Svelete reactivity is based on assignment
  let name = "Hello Larry";
  let src = "/vite.svg";
  let string = `this string contains some <strong>HTML!!!</strong>`;
  let count = 0;
  let numbers = [1, 2, 3, 4, 5];

  // Reactive Declaration
  $: doubled = count * 2;
  $: {
    console.log(`The count is ${count}`);
  }

  $: if (count >= 10) {
    console.log("Count is dangerously high!");
    count = 0;
  }

  function increment() {
    count += 1;
  }

  function addNumber() {
    numbers.push(numbers.length + 1); // This will not trigger reactivity
    numbers = numbers; // This will trigger reactivity
  }

  function addNumber2() {
    numbers = [...numbers, numbers.length + 1]; // This will trigger reactivity
  }
</script>

<section>
  <h1>{name}</h1>
  <img {src} alt="a horse" />
</section>

<section>
  <p>This is a paragraph.</p>

  <!-- Nested Component Example -->
  <Nested />

  <!-- @html allows spitting HTML out -->
  <p>{@html string}</p>
</section>

<section>
  <!-- Clicked Button triggers plain increment function -->
  <button on:click={increment}>
    Clicked {count}
  </button>

  <!-- Use Reactive Declaration -->
  <div>
    The Count of {count} doubled is: {doubled}
  </div>
</section>

<section>
  <button on:click={addNumber}> Add Number </button>

  <button on:click={addNumber2}> Add Number 2 </button>

  <ul>
    {#each numbers as number}
      <li>{number}</li>
    {/each}
  </ul>
</section>

<style>
  p {
    color: goldrenrod;
    font-family: "Comic Sans MS", cursive;
  }
</style>
