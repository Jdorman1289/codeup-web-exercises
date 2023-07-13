const map = initializeMap()

function initializeMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        zoom: 10,
        center: [-98.4916, 29.4252]
    }
    return new mapboxgl.Map(mapOptions);
}


map.setZoom(1);



