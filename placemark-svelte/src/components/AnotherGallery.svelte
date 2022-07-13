<script>
	import Gallery from 'svelte-image-gallery'
    import MainNavigator from './MainNavigator.svelte';
    import {getContext, onMount} from "svelte";

    let allImages = []
    const CraftspotService = getContext("CraftspotService");

    onMount(async () => {
        const spots = await CraftspotService.getAllSpots();
        spots.forEach(spot => {
            allImages = allImages.concat(spot.images);
        })
    })

</script>

<MainNavigator/>
<div class="box box-link-hover-shadow has-background-warning-light" id="craftspot-map" style="height:800px">
    <div class="title">CraftSpot Gallery</div>
        <Gallery gap="10" maxColumnWidth="200">
            {#each allImages as image }
                <img src={image.img} alt="">
            {/each}
        </Gallery>
    </div>


