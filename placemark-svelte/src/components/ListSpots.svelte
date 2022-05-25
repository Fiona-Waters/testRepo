<script>
import { getContext, onMount, createEventDispatcher } from "svelte";

const craftspotService = getContext("CraftspotService");
const dispatch = createEventDispatcher();
let spotList = [];
let spot = {};
export let craftId;

onMount(async () => {
    spotList = await craftspotService.getSpotsByCraftId(craftId);
});

export async function refreshSpotList() {
        spotList = await craftspotService.getSpotsByCraftId(craftId);
    }

async function deleteSpot(spotid) {
  const success = await craftspotService.deleteSpot(spotid);
  if(success) {
    dispatch("message")
  }
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
             <a href="#/craft/{spot.craftid}/spot/{spot._id}" class="button">
                <i class="fas fa-pen"></i> </a>
          </td>
          <td>
            <button on:click={() => { deleteSpot(spot._id) }} class="button">
              <i class="fas fa-trash"></i> </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>