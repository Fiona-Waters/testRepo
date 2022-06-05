<script>
    
import craftSupplies from "/src/assets/craftSupplies.jpg";
import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
import {getContext} from "svelte";

const craftspotService = getContext("CraftspotService")
craftspotService.logout();

</script>


<div class="columns is-vcentered">
    <div class="column is-one-third-right">
        <WelcomeNavigator/>
    </div>   
</div>
<div class="columns is-vcentered ">
    <figure class="image">
        <img width="300" class="is-rounded" src="{craftSupplies}" alt="craft supplies">
    </figure>
    <div class="column is-right">
        <h1 class="title has-text-right">Please sign up or log in...</h1>
    </div>
</div>