<script>
    import {getContext, createEventDispatcher} from "svelte";

    let image;
    let imageFilename = "";
    const craftspotService = getContext("CraftspotService"); 
    export let spotid;
    const dispatch = createEventDispatcher();

    async function uploadImage(){
        const success = await craftspotService.uploadImage(spotid, image[0]);
        if (success) {
            dispatch("message", {})
            imageFilename = "";
        }
    }

    function onFileChange(event) {
    if (event.target.files.length > 0) {
      imageFilename = event.target.files[0].name;
    }
  };    
  </script>
  <div class="column has-text-centered">
      <div class="box">
        <form on:submit|preventDefault={uploadImage}>
            <div id="file-select" class="file has-name is-fullwidth">
                <label class="file-label">
            <input 
              type="file" on:change={onFileChange}
              bind:files={image} style="display:none"/>
            <br />
            <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose an Image to upload…
                </span>
               </span>
              <span class="file-name">{imageFilename}</span>
            </label>
            <input type="submit" />
          </form>
      </div>
  </div>
  