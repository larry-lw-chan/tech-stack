<script>
  import Inner from "./Inner.svelte";

  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<button on:click|once={() => alert("Click me")}>Click Me</button>
<Inner on:message={handleMessage} />
