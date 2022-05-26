<script>
import MainNavigator from "../components/MainNavigator.svelte";
import UserList from "../components/UserList.svelte";
import ApplicationAnalytics from "../components/ApplicationAnalytics.svelte";


let userListComponent = undefined;

    async function updateList(event) {
        await userListComponent.refreshUserList();
    }
</script>

<MainNavigator/>
<UserList on:message={updateList} bind:this={userListComponent}/>


<ApplicationAnalytics/>

