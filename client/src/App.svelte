<script>
  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/Login.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import SignUp from "./pages/SignUp/SignUp.svelte";
  import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.svelte";
  import RedPill from "./pages/RedPill/RedPill.svelte";
  import BluePill from "./pages/BluePill/BluePill.svelte";
  import PrivateRoute from "./components/PrivateRoute/PrivateRoute.svelte";

  const cookie = document.cookie;
</script>

<main class="container mainContainer">
  <Router>
      <div>
        <Route path="/"><Login /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/forgot-password"><ForgotPassword /></Route>
        <Route path="/forgot-password/*"><ForgotPassword /></Route>
      </div>
      <PrivateRoute path="/redpill"><RedPill /></PrivateRoute>
      <PrivateRoute path="/bluepill"><BluePill /></PrivateRoute>
      <PrivateRoute path="/home"><Home /></PrivateRoute>
  </Router>
</main>
