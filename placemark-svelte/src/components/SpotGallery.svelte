<script>
    import Image from "../components/Image.svelte";
    import {createEventDispatcher} from "svelte";
    import SpotImage from "./SpotImage.svelte";
    
    const dispatch = createEventDispatcher();
    export let images = [];
    export let spotid;

    async function refresh() {
        dispatch("message");
    }

</script>    
    
<section class="section">
    <div class="container">
        <h1 class="title">Photo Gallery</h1>
        <h2 class="subtitle">Upload & View Photos of Your Spot Here</h2>
            <div class="container 	" >
                <div class="columns is-inline-flex is-flex-direction-row is-flex-wrap-wrap">
                        {#each images as image}
                        <div class="column">
                        <Image image={image} spotid={spotid} on:message={refresh} />
                </div>
                        {/each}
                    
            </div>
    </div>        
    </div>
</section>
<section>
       <div class="column">
        <h3 >Choose an image to upload, then click submit.</h3>
            <SpotImage spotid={spotid} on:message={refresh}/>
        </div>
</section>





    

    
    