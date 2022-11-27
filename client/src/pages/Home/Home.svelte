<script>
  import Button from "../../components/Button/Button.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import RedPill from "../RedPill/RedPill.svelte";
  import BluePill from "../BluePill/BluePill.svelte";

  function click() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.replace("/");
  }
</script>

<div class="row">
  <div>
    <div class="container">
      <Button id="logoutButton" clickFunc={click} backgroundColor="green">
        Log out
      </Button>
    </div>
  </div>
  <div class="container">
    <img src="./public/images/redblue.jpeg" alt="" usemap="#clickMap" />
    <map name="clickMap">
      <Link to="/redpill">
        <area shape="rect" coords="376,584,153,406" alt="redpill" />
      </Link>
      <Link to="/bluepill">
        <area shape="rect" coords="596,410,842,590" alt="bluepill" />
      </Link>
    </map>
  </div>
</div>
<div class="row">
  <div class="row textContainer">
    <div class="container">
      <h4 class="shimmer">
        “You take the blue pill, the story ends, you wake up in your bed and
        believe whatever you want to believe. You take the red pill, you stay in
        wonderland, and I show you how deep the rabbit hole goes."
      </h4>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato:300");

  .shimmer {
    font-family: "Lato";
    font-weight: 300;
    font-size: 2em;
    margin: 0 auto;
    padding: 0 140px 0 0;
    display: inline;
    margin-bottom: 0;
  }

  .shimmer {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: -moz-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    -webkit-background-size: 125px 100%;
    -moz-background-size: 125px 100%;
    background-size: 125px 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-animation-name: shimmer;
    -moz-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-duration: 15s;
    -moz-animation-duration: 15s;
    animation-duration: 15s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #222;
  }

  @-moz-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-webkit-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-o-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
</style>
