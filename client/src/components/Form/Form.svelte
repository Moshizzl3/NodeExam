<script>
  import Button from "../Button/Button.svelte";
  import Input from "../Input/Input.svelte";
  import UserMessage from "../UserMessage.svelte/UserMessage.svelte";

  let mail = "";
  let password = "";
  let messageToUser = "";

  async function click() {
    const user = { mail: mail, password: password };
    console.log(user);

    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-type": "application/json", authorization: "hi" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      document.cookie = `token=${data}`;
      window.location.replace("/")
      mail = "";
      password = "";
      messageToUser = "";
    } else {
      messageToUser = "didnt work";
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
      type="text"
      placeholder="Indtast password"
      bind:value={password}
    />
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="row">
        <p id="wrongPassword" />
      </div>
    </div>
  </div>

  <!-- Submit button -->
  <Button backgroundColor="lightblue" clickFunc={click} id="login-button">
    Login
  </Button>
  <UserMessage {messageToUser} />
</form>
