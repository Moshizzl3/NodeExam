<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "../../store/global";

  let isApproved = false;
  async function isAuthorized() {
    const response = await fetch(`${$BASE_URL}/api/bluepill/page`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    });
    if (response.ok) {
      isApproved = true;
    }
  }

  const getCookie = (name) => {
    return document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");
  };

  onMount(isAuthorized);
</script>

<div>
  {#if isApproved}
    <h1>bluepill content</h1>
  {:else}
    <h1>
      You have made it into the redpill crew, once you go down the rabithole
      theres no turning back
    </h1>
  {/if}
</div>
