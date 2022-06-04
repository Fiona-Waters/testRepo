<script>
    import CraftSpotBrand from "./CraftSpotBrand.svelte";
</script>

<nav class="navbar">
    <div class="navbar-brand">
    <CraftSpotBrand/>
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a id="dashboard" class="button" href="/#/dashboard"> Dashboard </a>
            <a id="admin-dashboard" class="button " href="/#/admin-dashboard">Admin Dashboard</a>
            <a id="map" class="button" href="/#/map">Map</a>
            <a id="charts" class="button" href="/#/charts">Charts</a>
            <a id="gallery" class="button" href="/#/photogallery">Gallery</a>
            <a id="my-account" class="button" href="/#/my-account"> My Account </a>
            <a id="logout" class="button" href="/#/logout"> Logout </a>
          </div>
        </div>
      </div>
    </div>
  </nav>