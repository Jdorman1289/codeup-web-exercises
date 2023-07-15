"use strict";

// Base URL for forecast API
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Simple way to create URL for request based on coordinates
function getWeatherURL(lat, lon) {
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}

const ALAMO_COORDINATES = ['29.4260', '-98.4861'];

// TODO: log URL

// console.log(getWeatherURL(ALAMO_COORDINATES[0], ALAMO_COORDINATES[1]));

const URL = getWeatherURL(...ALAMO_COORDINATES);

// TODO: log full response from API

$.ajax(URL).done(data => {
    console.log(data);
}).fail(console.error);


// TODO: log the humidity for all 5 days

// $.ajax(getWeatherURL(...ALAMO_COORDINATES))
//     .done((data) => {
//
//         data.list.forEach((day, index) => {
//             if (index % 8 === 0) {
//                 console.log(day.main.humidity);
//             }
//         });
//
//         // OR
//
//         for (let i = 0; i < data.list.length; i += 8) {
//             console.log(data.list[i].main.humidity);
//         }
//
//     })
//     .fail(console.error);


// TODO: log the min and max temp for each day

// $.ajax(getWeatherURL(...ALAMO_COORDINATES))
//     .done(data => {
//         console.log(data);
//         const minMaxTemps = returnMinMaxTemps(data);
//         minMaxTemps.forEach(minMaxTemp => {
//             console.log(minMaxTemp);
//         });
//     })
//     .fail(console.error);


//Mapbox//////////////////////////////////////////////////////////////
mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/navigation-night-v1",
    zoom: 5,
    center: [-98.4916, 29.4252]
});

window.map = map;


// Rain layer code taken from https://github.com/rainviewer/rainviewer-api-example/blob/master/rainviewer-mapbox-example.html
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