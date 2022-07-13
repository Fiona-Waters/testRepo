<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import ListCraft from "../components/ListCraft.svelte";
    import AddCraft from "../components/AddCraft.svelte";
    
    let listCraftComponent = undefined;

    async function craftAdded(e) {
      console.log(listCraftComponent);
      console.log(e);
      await listCraftComponent.refreshCraftList();
    }

</script>

<MainNavigator />

<section class="section">
  <h1 class="title">Your Craft List</h1>
  <ListCraft bind:this={listCraftComponent}/>
  <AddCraft on:message={craftAdded}/>
</section>

