const map = initializeMap();
const marker = createMarker();
const popup = createPopup();

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
function createMarker() {
    return new mapboxgl.Marker().setLngLat([-98.4916, 29.4252]).addTo(map);
}
function createPopup() {
    return new mapboxgl.Popup().setLngLat([-98.4916, 29.4252]).setHTML(`
    <h1>Sup</h1>
    <p>My man!</p>
    `)
}

marker.setPopup(popup);