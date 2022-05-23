<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import ListSpots from "../components/ListSpots.svelte";
    import AddSpot from "../components/AddSpot.svelte";
    import CraftImage from "../components/CraftImage.svelte";

    let title = "";
    
    export let params;
    console.log("params",params);
    console.log("params id", params.id);
    
    let listSpotComponent = undefined;

    async function spotAdded(event) {
        await listSpotComponent.refreshSpotList();
    }

</script>

<MainNavigator/>
<section class="section columns is vcentered">
    <div class="column is-9 has-text-centered">
      <div class="title">
        Your {title} Spot List
      </div>
      <ListSpots bind:this={listSpotComponent} craftId={params.id}/>
      <AddSpot on:message={spotAdded} craftId={params.id} />
    </div>
    <div class="column">
      <div class="title">
      {title}
      </div>
      <CraftImage/>
    </div>
  </section>
  