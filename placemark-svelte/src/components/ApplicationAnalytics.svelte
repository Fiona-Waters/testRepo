<script>
import { getContext, onMount } from "svelte";

const craftspotService = getContext("CraftspotService");

export let results = {};
let renderResults = {};
export let users = [];
let crafts = [];
let spots = [];

onMount(async () => {
        results = await craftspotService.getAnalyticsData();
        renderResults = results.data;
        users = await craftspotService.getAllUsers();
        crafts = await craftspotService.getAllCrafts();
        spots = await craftspotService.getAllSpots();
        
    })

</script>

<div class="box box-link-hover-shadow has-background-warning-light">
    <h2 class="title">
      Application Analytics
    </h2>
    <table class="table is-fullwidth is-striped has-background-warning-light">
    <thead>
        <tr>
            <th>Item</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Users
            </td>
            <td>
                {users.length}
            </td>
        </tr>
        <tr>
            <td> 
                Crafts
            </td>
            <td>
                {crafts.length}
            </td>
        </tr>
        <tr>
            <td> 
                Spots
            </td>
            <td>
               {spots.length}
            </td>
        </tr>
        <tr>
            <td>
                Average Crafts Per User
            </td>
            <td>
                {renderResults.averageCraftsPerUser}
            </td>
        </tr>
        <tr>
            <td>
                Average Spots Per User
            </td>
            <td>
                {renderResults.averageSpotsPerUser}
            </td>
        </tr>
        <tr>
            <td>
                Average Spots Per Craft
            </td>
            <td>
                {renderResults.averageSpotsPerCraft}
            </td>
        </tr>     
        <tr>
            <td>
                Most Crafts
            </td>
            <td>
                {renderResults.mostCrafts}
            </td>
        </tr> 
        <tr>
            <td>
                Least Crafts 
            </td>
            <td>
                {renderResults.leastCrafts}
            </td>
        </tr>
    </tbody>
  </div>