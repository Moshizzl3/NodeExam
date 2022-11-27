<script>
  import Button from "../Button/Button.svelte";
  import Input from "../Input/Input.svelte";
  import { BASE_URL, cookie } from "../../store/global";
  import { onMount } from "svelte";
  import toastr from "toastr";

  let mail;
  let password;
  let hasValidToken = false;

  async function sendMail() {
    const response = await fetch(`${$BASE_URL}/api/users/${mail}`);
    const data = await response.json();
    if (response.ok) {
      const mailResponse = await fetch(`${$BASE_URL}/mail/forgot`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
    }
  }

  async function checkUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("Bearer");
    if (token) {
      const response = await fetch(`${$BASE_URL}/api/mail/token`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json()
        mail = data.data
        hasValidToken = true;
      }
    }
  }

  async function resetPassword() {
    if (hasValidToken){
      const user = {mail, password}
      const response = await fetch(`${$BASE_URL}/api/users`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user)
      });
      if (response.ok){
        toastr.success("Password has been reset, you will be redirected shortly");
        setTimeout(()=>{
          window.location.replace("/")
        }, 5000)
      }
    } 
  }
  onMount(checkUrl);
</script>

<form id="login-form">
  <!-- New Password input -->
  <div class="form-outline mb-4">
    {#if hasValidToken}
      <div class="row">
        <Input
          name="password"
          type="text"
          placeholder="Indtast nyt password"
          bind:value={password}
        />
      </div>

      <div class="row mt-2">
        <!-- Submit button -->
        <Button
          backgroundColor="lightblue"
          clickFunc={resetPassword}
          id="login-button"
        >
          Bekræft ændring
        </Button>
      </div>
    {:else}
      <div class="row">
        <Input
          name="mail"
          type="text"
          placeholder="Indtast din mail"
          bind:value={mail}
        />
      </div>
      <div class="row mt-2">

        <!-- Submit button -->
        <Button
          backgroundColor="lightblue"
          clickFunc={sendMail}
          id="login-button"
        >
         Send mail
        </Button>
      </div>
    {/if}
  </div>
</form>
