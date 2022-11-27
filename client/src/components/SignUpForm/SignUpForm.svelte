<script>
  import Button from "../Button/Button.svelte";
  import Input from "../Input/Input.svelte";
  import UserMessage from "../UserMessage.svelte/UserMessage.svelte";
  import toastr from "toastr";

  let name = "";
  let mail = "";
  let password = "";
  let messageToUser = "";
  async function click() {
    const user = { name, mail, password };

    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      toastr.success("you are now signed up, you will be redirected shortly");

      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
    } else {
      messageToUser = "didnt work";
    }
  }
</script>

<form id="signup-form">
  <!-- Name input -->
  <div class="form-outline mb-4">
    <Input
      name="name"
      type="text"
      placeholder="Indtast navn"
      bind:value={name}
    />
  </div>
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
    Opret ny bruger
  </Button>
  <UserMessage {messageToUser} />
</form>
