<script>
    let img;
    export let spot;
    import {getContext, createEventDispatcher} from "svelte";
    const craftspotService = getContext("CraftspotService"); 
    const dispatch = createEventDispatcher();

    export async function deleteImage() {
        const success = await craftspotService.deleteImage(spot._id)
        if (success) {
            dispatch("message", {})
        }
    }

</script>
<div class="column has-text-centered">
    <div class="card">
        <div class="card-image">
            <figure class="image is-256x256">
            <img src={spot.img} alt="user added">
            </figure>
            <button class="button is-danger is-fullwidth" on:click={deleteImage}>Delete Image</button>
        </div>
    </div>
</div>
