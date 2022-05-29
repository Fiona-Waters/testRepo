<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import { getContext, onMount } from "svelte";

    const craftspotService = getContext("CraftspotService");

    let applicationData = {
    labels: ['Users', 'Crafts', 'Spots'],
    datasets: [
      {
        values: [0, 0, 0]
      }
    ]
  };

    let categoryData = {
        labels: ['Shops', 'Classes', 'Exhibitions', 'Knit Nights', 'Festivals', 'Other' ],
        datasets: [
            {
                values: [0, 0, 0, 0, 0, 0]
            }
        ]
    }

  onMount(async () => {
      let userList = await craftspotService.getAllUsers();
      applicationData.datasets[0].values[0] = userList.length;
      let spotList = await craftspotService.getAllSpots();
      applicationData.datasets[0].values[1] = spotList.length;
      let craftList = await craftspotService.getAllCrafts();
      applicationData.datasets[0].values[2] = craftList.length;
      categoryData.datasets[0].values[0] = 12;
      categoryData.datasets[0].values[1] = 19;
      categoryData.datasets[0].values[2] = 8;
      categoryData.datasets[0].values[3] = 6;
      categoryData.datasets[0].values[4] = 15;
      categoryData.datasets[0].values[5] = 3;
  })
</script>

<MainNavigator/>
<div class=section>
<div class="box box-link-hover-shadow has-background-warning-light"> 
  <div class="columns">
    <div class="column box has-text-centered">
      <h1 class="title is-4">Application Data Bar Chart</h1>
      <Chart data={applicationData} type="bar" />
    </div>
      </div>
    </div>
</div>
    
<div class=section>
    <div class="box box-link-hover-shadow has-background-warning-light"> 
      <div class="columns">
            <div class="column has-text-centered">
              <h1 class="title is-4">Application Data Pie Chart</h1>
              <Chart data={applicationData} type="pie"/>
            </div>
          </div>
        </div>
    </div>