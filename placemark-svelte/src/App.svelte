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
  import AdminDashboard from "./pages/AdminDashboard.svelte";
  import MyAccount from "./pages/MyAccount.svelte";
  import Charts from "./pages/Charts.svelte";
  import Map from "./pages/Map.svelte";
  import SpotView from "./pages/SpotView.svelte";
  import PhotoGallery from "./pages/PhotoGallery.svelte";

  setContext("CraftspotService", new CraftspotService("https://limitless-cliffs-75212.herokuapp.com/"));

  let routes = {
  "/": Main,
  "/login": Login,
  "/signup": Signup,
  "/main": Main,
  "/dashboard": Dashboard, 
  "/logout": Main,
  "/craft/:id": CraftView,
  "/craft/:craftid/spot/:spotid": EditSpot,
  "/admin-dashboard": AdminDashboard,
  "/my-account": MyAccount,
  "/charts": Charts,
  "/map": Map,
  "/spot/:spotid": SpotView,
  "/photogallery": PhotoGallery,

}

</script>


<div class="container">

  <Router {routes}/>
</div>