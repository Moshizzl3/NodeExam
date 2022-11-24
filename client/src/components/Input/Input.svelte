<script>
  export let name;
  export let type;
  export let placeholder;
  export let value = "";

  function typeAction(node) {
    node.type = type;
  }
</script>

<input class="form-control"  use:typeAction {name} {placeholder} bind:value />
