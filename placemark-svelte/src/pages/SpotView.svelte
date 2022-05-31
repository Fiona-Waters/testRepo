<script>
    import SpotImage from "../components/SpotImage.svelte";
    import Image from "../components/Image.svelte";
    import { onMount, getContext } from "svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    

    let spot = {};
    export let params;
    const craftspotService = getContext("CraftspotService");

    onMount(async () => {
        spot = await craftspotService.getSpotById(params.spotid);
    })

    async function refreshSpot() {
        spot = await craftspotService.getSpotById(params.spotid);
    }

    

</script>

<MainNavigator/>
<section class="section columns is-vcentered">
    <div class="column has-text-centered">
        <div class="title">{spot.placeName}</div>
<div class="box">
<table class="table is-half is-narrow is-striped has-background-warning-light">
    <thead>
      <tr>
        <th>Place Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Description</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
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
        </tr>
    </tbody>
  </table>
</div>
</div>
<div class="column has-text-centered">
{#if spot.img}  
    <Image spot={spot} on:message={refreshSpot} />
{/if} 

<SpotImage spotid={spot._id} on:message={refreshSpot}/>
</div>
</section>

