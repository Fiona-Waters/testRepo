<script>
    import {getContext, onMount} from "svelte";
    import Craft from "./Craft.svelte";

    const craftspotService = getContext("CraftspotService");
    let craftList = [];

    onMount(async () => {
        craftList = await craftspotService.getAllCrafts();
    });

    export async function refreshCraftList() {
        craftList = await craftspotService.getAllCrafts();
    }
</script>

{#each craftList as craft }
  <Craft id={craft._id} title={craft.title} />
{/each}