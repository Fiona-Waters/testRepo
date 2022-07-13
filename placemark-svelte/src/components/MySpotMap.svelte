<script>
   // import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from "../services/leaflet-map.js"
    import {getContext, onMount} from "svelte";

    const craftspotService = getContext("CraftspotService");
    export let craftId;
    let spotList = [];

    const mapConfig = {
        location: {lat: 53.1424, lng: -7.6921},
        zoom: 7,
        minZoom: 1,
    };

    let map = null;

    onMount(async () => {
        map = new LeafletMap("craftspot-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();

        spotList = await craftspotService.getSpotsByCraftId(craftId);
        spotList.forEach(spot => {
            addSpotMarker(spot);
        })
        });

    export function addSpotMarker(spot) {
        map.addMarker({lat: spot.lat, lng: spot.lng}, spot.placeName);
    }


</script>

<label for="title" class="label"> View the location of your Spots for this Craft </label>
<div class="box" id="craftspot-map" style="height:800px">
</div>