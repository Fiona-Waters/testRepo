<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Router from "svelte-spa-router";
  import { CraftspotService } from "./services/CraftspotService.js"
  import { setContext } from "svelte";

  setContext("CraftspotService", new CraftspotService("http://localhost:4000"));

  let routes = {
  "/": Main,
  "/login": Login,
  "/signup": Signup,
  "/main": Main
}

</script>


<div class="container">

  <Router {routes}/>
</div>