<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import ListSpots from "../components/ListSpots.svelte";
    import AddSpot from "../components/AddSpot.svelte";
    import CraftImage from "../components/CraftImage.svelte";
    
    let title = "";
    
    export let params;
    
    let listSpotComponent = undefined;

    async function updateList(event) {
        await listSpotComponent.refreshSpotList();
    }
 
</script>

<MainNavigator/>
<section class="section columns is vcentered">
    <div class="column is-9 has-text-centered">
      <div class="title">
        Your {title} Spot List
      </div>
      <ListSpots on:message={updateList} bind:this={listSpotComponent} craftId={params.id} />
      <AddSpot on:message={updateList} craftId={params.id} />
    </div>
    <div class="column">
      <div class="title">
      {title}
      </div>
      <CraftImage/>
    </div>
  </section>
  