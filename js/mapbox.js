mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/navigation-day-v1",
    zoom: 3,
    center: [-98.4916, 29.4252]
});

window.map = map;
const marker = createMarker();
const popup = createPopup();
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
//geo code
function goToParis() {
    geocode('Paris', MAPBOX_TOKEN).then((data) => {
        map.setCenter(data);
    })
}
//reverse geo
function showLocation() {
    const coord = map.getCenter();
    reverseGeocode(coord, MAPBOX_TOKEN).then((data) => {
        document.querySelector('h1').innerHTML = `${data}`;
    })
}
document.querySelector('#geocode-button').addEventListener("click", goToParis);
document.querySelector('#reverse-geo').addEventListener("click", showLocation);
map.on("load", () => {
    fetch("https://api.rainviewer.com/public/weather-maps.json")
        .then(res => res.json())
        .then(apiData => {
            apiData.radar.past.forEach(frame => {
                map.addLayer({
                    id: `rainviewer_${frame.path}`,
                    type: "raster",
                    source: {
                        type: "raster",
                        tiles: [
                            apiData.host + frame.path + '/256/{z}/{x}/{y}/2/1_1.png'
                        ],
                        tileSize: 256
                    },
                    layout: {visibility: "none"},
                    minzoom: 0,
                    maxzoom: 12
                });
            });

            let i = 0;
            const interval = setInterval(() => {
                if (i > apiData.radar.past.length - 1) {
                    clearInterval(interval);
                    return;
                } else {
                    apiData.radar.past.forEach((frame, index) => {
                        map.setLayoutProperty(
                            `rainviewer_${frame.path}`,
                            "visibility",
                            index === i || index === i - 1 ? "visible" : "none"
                        );
                    });
                    if (i - 1 >= 0) {
                        const frame = apiData.radar.past[i - 1];
                        let opacity = 1;
                        setTimeout(() => {
                            const i2 = setInterval(() => {
                                if (opacity <= 0) {
                                    return clearInterval(i2);
                                }
                                map.setPaintProperty(
                                    `rainviewer_${frame.path}`,
                                    "raster-opacity",
                                    opacity
                                );
                                opacity -= 0.1;
                            }, 50);
                        }, 400);
                    }
                    i += 1;
                }
            }, 2000);
        })
        .catch(console.error);
});
