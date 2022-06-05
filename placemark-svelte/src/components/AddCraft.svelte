<script>
    import { createEventDispatcher, getContext } from "svelte";
    import sanitizeHtml from "sanitize-html";

    let title = "";
    let errorMessage = "";
    const craftspotService = getContext("CraftspotService");
    const dispatch = createEventDispatcher();

    async function addCraft() {  
            const newCraft = {
                title: sanitizeHtml(title), 
            };
            const success = await craftspotService.addCraft(newCraft)
            if(success) {
                dispatch("message", {craft: newCraft,})
                title = "";
            }
    };
</script>

<form on:submit|preventDefault={addCraft}>
    <div class="field has-background-warning-light">
      <label for="title" class="label">Craft Name</label>
      <input bind:value={title} id="title" class="input" type="text" placeholder="Enter craft name" name="title" />
    </div>
    <button class="button is-link is-warning">Add Craft</button>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}