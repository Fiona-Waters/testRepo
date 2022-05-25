<script>
    import {getContext, createEventDispatcher} from "svelte";
   
    export let title;
    export let craftid;

    const craftspotService = getContext("CraftspotService");
    const dispatch = createEventDispatcher();
   
    async function deleteCraft() {  
      const success = await craftspotService.deleteCraft(craftid);
      if(success){
          dispatch("message")
        }
    }
</script>

<div class="box box-link-hover-shadow has-background-warning-light">
    <h2 class="title">
      {title}
    </h2>
    <a href="#/craft/{craftid}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <button on:click={deleteCraft} class="button">
      <span class="icon-is-small">
        <i class="fas fa-trash"></i>
      </span></button>
  </div>