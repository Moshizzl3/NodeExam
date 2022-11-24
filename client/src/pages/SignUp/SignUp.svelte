<script>
  import Footer from "../../components/Footer/Footer.svelte";
  import SignUpForm from "../../components/SignUpForm/SignUpForm.svelte";
</script>

<div class="row rounded">
  <div class="container mainContainer ">
    <div class="row d-flex justify-content-center h-25 align-content-center">
      <div class="container col-8 textContainer">
        <h3>Ny bruger</h3>
      </div>
    </div>

    <div
      class="row d-flex justify-content-center align-content-center h-75 loginContent"
    >
      <!-- Login content -->
      <div
        class="container col-sm-4 border-secondary contentContainer p-4 rounded"
      >
        <SignUpForm />
        <div />
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
