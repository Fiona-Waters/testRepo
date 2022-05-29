<script>
    import 'leaflet/dist/leaflet.css';
    import MainNavigator from "../components/MainNavigator.svelte";
    import {LeafletMap} from "../services/leaflet-map.js"
    import {getContext, onMount} from "svelte";

    const CraftspotService = getContext("CraftspotService");

    const mapConfig = {
        location: {lat: 53.1424, lng: -7.6921},
        zoom: 8,
        minZoom: 1,
    };

    let map = null;

    onMount(async () => {
        map = new LeafletMap("craftspot-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();

        const spots = await CraftspotService.getAllSpots();
        spots.forEach(spot => {
            addSpotMarker(spot);
        });
    });

    function addSpotMarker(spot) {
        const spotStr = `${spot.placeName}`;
        map.addMarker({lat: spot.lat, lng: spot.lng}, spotStr);

    }
</script>

<MainNavigator/>
<label for="title" class="label">All Spot Locations</label>
<div class="box" id="craftspot-map" style="height:800px">
</div>