<script>
import { getContext, onMount } from "svelte";

const craftspotService = getContext("CraftspotService");
let spotList = [];
export let craftId;
console.log('ListSpots', craftId);

onMount(async () => {
    spotList = await craftspotService.getAllSpots();
});

export async function refreshSpotList() {
        spotList = await craftspotService.getAllSpots();
    }

</script>

<table class="table is-fullwidth is-striped has-background-warning-light">
    <thead>
      <tr>
        <th>Place Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Description</th>
        <th>Category</th>
        <th>Edit Spot</th>
        <th>Delete Spot</th>
      </tr>
    </thead>
    <tbody>
      {#each spotList as spot}
        <tr>
          <td>
            {spot.placeName}
          </td>
          <td>
            {spot.lat}
          </td>
          <td>
              {spot.lng}
          </td>
          <td>
            {spot.description}
          </td>
          <td>
            {spot.category}
          </td>
          <td>
             <a href="/craft/id/spot/id" class="ui icon button">
                <i class="fas fa-pen"></i> </a>
          </td>
          <td>
           <a href="/craft/id/deletespot/id" class="ui icon button">
              <i class="fas fa-trash"></i> </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>