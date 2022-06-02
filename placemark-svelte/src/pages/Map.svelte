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
        const spots = await CraftspotService.getAllSpots();
        
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        const categories = spots.map((spot) => {
            return spot.category;
        }).filter(onlyUnique)
        
        categories.forEach(category => {
            map.addLayerGroup(category);
        })

        spots.forEach(spot => {
            addSpotMarker(spot);
        });
        map.showLayerControl();
    });

    function addSpotMarker(spot) {
        const spotStr = `${spot.placeName}`;
        map.addMarker({lat: spot.lat, lng: spot.lng}, spotStr, spot.category);
    }
</script>

<MainNavigator/>
<label for="title" class="label">All Spot Locations</label>
<div class="box" id="craftspot-map" style="height:800px">
</div>