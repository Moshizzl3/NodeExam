<script>
  export let id;
  export let clickFunc;
  export let backgroundColor;
</script>

<button
  type="button"
  style:background-color= {backgroundColor}
  class="btn btn-block mb-4"
  on:click={clickFunc}
  {id}
>
  <slot />
</button>

<style>

</style>
