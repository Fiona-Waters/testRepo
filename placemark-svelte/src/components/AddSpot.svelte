<script>
import { createEventDispatcher, getContext } from "svelte";

let placeName = "";
let lat = "";
let lng = "";
let description = "";
let category = "";
let errorMessage = "";

const craftspotService = getContext("CraftspotService");
const dispatch = createEventDispatcher();
export let craftId;
console.log('AddSpots', craftId);

async function addSpot() {
    const newSpot = {
        craftid: craftId,
        placeName: placeName,
        lat: lat,
        lng: lng,
        description: description,
        category: category,
    };
    console.log("params(addSpot)", craftId);
    const success = await craftspotService.addSpot(newSpot.craftid,newSpot)
    console.log("newspotcraftid", newSpot.craftid)
    if (success) {
        dispatch("message", {spot: newSpot})
        placeName = "";
        lat = "";
        lng = "";
        description = "";
        category = "";
    }
}

</script>

<form on:submit|preventDefault={addSpot}>
    <label for="title" class="label">Enter Spot Details:</label>
    <div class="field is-horizontal has-background-warning-light">
      <div class="field-body">
        <div class="field">
          <label for="placeName" class="label">Place Name</label>
          <input bind:value={placeName} class="input" type="text" maxlength="20" placeholder="Enter Place Name" name="placeName" />
        </div>
        <div class="field">
          <label for="lat" class="label">Latitude</label>
          <input bind:value={lat} class="input" type="number" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" placeholder="Enter Latitude" name="lat" />
        </div>
        <div class="field">
          <label for="lng" class="label">Longitude</label>
          <input bind:value={lng} class="input" type="number" step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" placeholder="Enter Longitude" name="lng" />
        </div>
        <div class="field">
          <label for="description" class="label">Description</label>
          <div class="control">
            <textarea bind:value={description} class="textarea is-input has-fixed-size" placeholder="Description" type="text" maxlength="280" pattern="[A-Za-z\\s]+{20}" name="description"></textarea>
          </div>
        </div>
        <div class="field">
          <label for="category" class="label">Category</label>
          <div class="control">
            <div class="select is primary">
              <select bind:value={category} name="category" id="category">
                <option>Choose Category</option>
                <option value="Shop">Shop</option>
                <option value="Class">Class</option>
                <option value="Exhibition">Exhibition</option>
                <option value="Knitnight">Knit Night</option>
                <option value="Festival">Festival</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="button is-warning">Add Spot</button>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}    