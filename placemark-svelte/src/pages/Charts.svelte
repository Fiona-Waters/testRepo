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
        labels: ['Class', 'Festival', 'Other', 'Shop', 'Exhibition', 'Knit Night' ],
        datasets: [
            {
                values: [0, 0, 0, 0, 0, 0]
            }
        ],
    }

  onMount(async () => {
      let userList = await craftspotService.getAllUsers();
      applicationData.datasets[0].values[0] = userList.length;
      let spotList = await craftspotService.getAllSpots();
      applicationData.datasets[0].values[1] = spotList.length;
      let craftList = await craftspotService.getAllCrafts();
      applicationData.datasets[0].values[2] = craftList.length;

      let info = await craftspotService.getSpotsPerCategory();
      const labels = info.map((item) => {
        return item._id;
      })
      const values = info.map((item) => {
        return item.totaldocs;
      })
      categoryData.labels = labels;
      categoryData.datasets[0].values = values;
  })
</script>

<MainNavigator/>
<div class=section>
<div class="box box-link-hover-shadow has-background-warning-light"> 
  <div class="columns">
    <div class="column box has-text-centered">
      <h1 class="title is-4">Application Data</h1>
      <Chart data={applicationData} type="bar"  />
    </div>
      </div>
    </div>
</div>
    
<div class=section>
    <div class="box box-link-hover-shadow has-background-warning-light"> 
      <div class="columns">
            <div class="column has-text-centered">
              <h1 class="title is-4">Number of Spots Per Category</h1>
              <Chart data={categoryData} type="pie" maxSlices={categoryData.labels.length} />
            </div>
          </div>
        </div>
    </div>