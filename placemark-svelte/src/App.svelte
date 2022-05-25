<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Router from "svelte-spa-router";
  import { CraftspotService } from "./services/CraftspotService.js"
  import { setContext } from "svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import CraftView from "./pages/CraftView.svelte";
  import EditSpot from "./pages/EditSpot.svelte";

  setContext("CraftspotService", new CraftspotService("http://localhost:4000"));

  let routes = {
  "/": Main,
  "/login": Login,
  "/signup": Signup,
  "/main": Main,
  "/dashboard": Dashboard, 
  "/logout": Main,
  "/craft/:id": CraftView,
  "/craft/:craftid/spot/:spotid": EditSpot

}

</script>


<div class="container">

  <Router {routes}/>
</div>