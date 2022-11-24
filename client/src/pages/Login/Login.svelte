<script>
  import Footer from "../../components/Footer/Footer.svelte";

  import { Router, Link, Route } from "svelte-navigator";
  import SignUp from "../SignUp/SignUp.svelte";
  import LoginForm from "../../components/LoginForm/LoginForm.svelte";
</script>

<div class="row rounded">
  <div class="container mainContainer ">

    <div class="row d-flex justify-content-center">
      <div class="container col-8 textContainer">
        <p>Login here!</p>
      </div>
    </div>

    <div
      class="row d-flex justify-content-center align-content-center h-75 loginContent"
    >
      <!-- Login content -->
      <div
        class="container col-sm-4 border-secondary contentContainer p-4 rounded"
      >
        <LoginForm />
        <div>
          <Link to="/signup">Ny bruger?</Link>
          <Link to="/forgot-password">Glemt password?</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />

<style>
  .contentContainer {
    background-color: rgba(0, 0, 0, 0.5);
  }


  .mainContainer {
    min-height: calc(100vh - 15vh);
  }
</style>
