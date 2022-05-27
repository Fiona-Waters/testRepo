<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import { getContext, onMount, createEventDispatcher} from "svelte";
    import { push } from "svelte-spa-router";
    
    const craftspotService = getContext("CraftspotService")
    const dispatch = createEventDispatcher();

    export let user = {};
    let userInfo = {};

    onMount(async () => { 
        user = await craftspotService.getLoggedInUser();
        userInfo = user.data;
    });

    async function updateUserDetails() {
      const success = await craftspotService.updateUserDetails(userInfo._id, userInfo);
      if (success) {
        dispatch("message", {user: userInfo})
        push("/login");
      }
    }

    async function deleteUser() {
      const success = await craftspotService.deleteUser(userInfo._id);
      console.log("deleteuser",userInfo._id)
      console.log(success);
      if(success) {
        dispatch("message")
        push("/")
      }
    }
</script>

<MainNavigator/>
<section class="section">
<form on:submit|preventDefault={updateUserDetails}>
    <h1 class="title">Your Account Details</h1>
      <h3 class = "subtitle">Update Your Details</h3>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label for="firstName" class="label">First Name</label>
            <input bind:value={userInfo.firstName} class="input" type="text" name="firstName">
          </div>
          <div class="field">
                <label for="lastName" class="label">Last Name</label>
            <input bind:value={userInfo.lastName} class="input" type="text" name="lastName">
          </div>
        </div>
      </div>
      <div class="field">
        <label for="email" class="label">Email</label> 
        <input class="input" type="text" name="email" bind:value={userInfo.email}>
      </div>
      <div class="field">
        <label for="password" class="label">Password</label> 
        <input class="input" type="password" name="password" bind:value={userInfo.password}>
      </div>
      <div class="field">
        <button class="button is-warning">Submit</button>
      </div>
    </form>
    <div>
      <h2> Delete Your Account</h2>
    <button on:click={deleteUser} class="button is-danger">
    <span class="icon-is-small">
      <i class="fas fa-trash"></i>
      </span>
    </div>
  </section>