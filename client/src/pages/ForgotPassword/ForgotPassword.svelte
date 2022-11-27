<script>
  import Footer from "../../components/Footer/Footer.svelte";
  
  import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm.svelte";

  </script>
  
  <div class="row rounded">
    <div class="container mainContainer ">
  
      <div class="row d-flex justify-content-center">
        <div class="container col-8 textContainer">
          <p>Change Password</p>
        </div>
      </div>
  
      <div
        class="row d-flex justify-content-center align-content-center h-75 changePasswordContent"
      >
        <!-- change password content -->
        <div
          class="container col-sm-4 border-secondary contentContainer p-4 rounded"
        >
        <ForgotPasswordForm/>
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
  