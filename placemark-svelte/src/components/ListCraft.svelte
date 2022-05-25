<script>
    import {getContext, onMount} from "svelte";
    import Craft from "./Craft.svelte";

    const craftspotService = getContext("CraftspotService");
    let craftList = [];

    onMount(async () => {
        craftList = await craftspotService.getUserCrafts();
    });

    export async function refreshCraftList() {
        craftList = await craftspotService.getUserCrafts();
    }
</script>

{#each craftList as craft }
  <Craft craftid={craft._id} title={craft.title} on:message={refreshCraftList} />
{/each}