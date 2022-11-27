<script>
  import Button from "../Button/Button.svelte";
  import Input from "../Input/Input.svelte";
  import { BASE_URL } from "../../store/global";
  import toastr from "toastr";

  let mail = "";
  let password = "";
  let messageToUser = "";
  async function click() {
    const user = { mail: mail, password: password };

    const response = await fetch(`${$BASE_URL}/api/authenticate`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = await response.json();
      document.cookie = `token=${data.accesToken}`;
      window.location.replace("/home");
      mail = "";
      password = "";
      messageToUser = "";
    } else {
      toastr.options.timeOut = 3000
      toastr.error("Wrong email or password, please try again")
    }
  }
</script>

<form id="login-form">
  <!-- Email input -->
  <div class="form-outline mb-4">
    <Input
      name="mail"
      type="email"
      placeholder="Indtast mail"
      bind:value={mail}
    />
  </div>
  <!-- Password input -->
  <div class="form-outline mb-4">
    <Input
      name="password"
      type="password"
      placeholder="Indtast password"
      bind:value={password}
    />
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="row">
        <p id="wrongPassword" />
      </div>
    </div>
  </div>

  <!-- Submit button -->
  <Button backgroundColor="lightblue" clickFunc={click} id="login-button">
    Login
  </Button>
</form>
