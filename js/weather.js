"use strict";

// Base URL for forecast API
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Simple way to create URL for request based on coordinates
function getWeatherURL(lat, lon) {
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}

const WEATHER_COORDINATES = ['29.4260', '-98.4861'];


const URL = getWeatherURL(...WEATHER_COORDINATES);

const Day1 = document.querySelector('.day1');
const Day2 = document.querySelector('.day2');
const Day3 = document.querySelector('.day3');
const Day4 = document.querySelector('.day4');
const Day5 = document.querySelector('.day5');


// $.ajax(URL).done(data => {
//     console.log(data);
// }).fail(console.error);


$.ajax(URL)
    .done((data) => {
        let weatherArray = [];

        data.list.forEach((day, index) => {
            if (index % 8 === 0) {
                weatherArray.push(day.weather[0].description);
            }
        });
        showWeather(weatherArray);
    })
    .fail(console.error);

function showWeather(weatherArray) {
    Day1.lastElementChild.lastElementChild.innerText = weatherArray[0];
    if (weatherArray[0].includes('cloud')) {
        Day1.firstElementChild.classList.add('card-storm');
        Day1.firstElementChild.firstElementChild.removeAttribute('class');
    } else if (weatherArray[0].includes('rain')) {
        Day1.firstElementChild.classList.add('card-rain');
        Day1.firstElementChild.firstElementChild.classList.add('rain');
    } else if (weatherArray[0].includes('clear sky')) {
        Day1.firstElementChild.classList.add('card-sunny');
        Day1.firstElementChild.firstElementChild.classList.add('sunny');
    } else if (weatherArray[0].includes('snow')) {
        Day1.firstElementChild.classList.add('card-snow');
        Day1.firstElementChild.firstElementChild.classList.add('snow');
    } else if (weatherArray[0].includes('storm')) {
        Day1.firstElementChild.classList.add('card-storm');
        Day1.firstElementChild.firstElementChild.classList.add('storm');
    } else {
        Day1.firstElementChild.classList.add('card-snow');
        Day1.firstElementChild.firstElementChild.removeAttribute('class');
    }

    Day2.lastElementChild.lastElementChild.innerText = weatherArray[1];
    if (weatherArray[1].includes('cloud')) {
        Day2.firstElementChild.classList.add('card-storm');
        Day1.firstElementChild.firstElementChild.removeAttribute('class');
    } else if (weatherArray[1].includes('rain')) {
        Day2.firstElementChild.classList.add('card-rain');
        Day2.firstElementChild.firstElementChild.classList.add('rain');
    } else if (weatherArray[1].includes('clear sky')) {
        Day2.firstElementChild.classList.add('card-sunny');
        Day2.firstElementChild.firstElementChild.classList.add('sunny');
    } else if (weatherArray[1].includes('snow')) {
        Day2.firstElementChild.classList.add('card-snow');
        Day2.firstElementChild.firstElementChild.classList.add('snow');
    } else if (weatherArray[1].includes('storm')) {
        Day2.firstElementChild.classList.add('card-storm');
        Day2.firstElementChild.firstElementChild.classList.add('storm');
    } else {
        Day2.firstElementChild.classList.add('card-snow');
        Day2.firstElementChild.firstElementChild.removeAttribute('class');
    }

    Day3.lastElementChild.lastElementChild.innerText = weatherArray[2];
    if (weatherArray[2].includes('cloud')) {
        Day3.firstElementChild.classList.add('card-storm');
        Day3.firstElementChild.firstElementChild.removeAttribute('class');
    } else if (weatherArray[2].includes('rain')) {
        Day3.firstElementChild.classList.add('card-rain');
        Day3.firstElementChild.firstElementChild.classList.add('rain');
    } else if (weatherArray[2].includes('clear sky')) {
        Day3.firstElementChild.classList.add('card-sunny');
        Day3.firstElementChild.firstElementChild.classList.add('sunny');
    } else if (weatherArray[2].includes('snow')) {
        Day3.firstElementChild.classList.add('card-snow');
        Day3.firstElementChild.firstElementChild.classList.add('snow');
    } else if (weatherArray[2].includes('storm')) {
        Day3.firstElementChild.classList.add('card-storm');
        Day3.firstElementChild.firstElementChild.classList.add('storm');
    } else {
        Day3.firstElementChild.classList.add('card-snow');
        Day3.firstElementChild.firstElementChild.removeAttribute('class');
    }

    Day4.lastElementChild.lastElementChild.innerText = weatherArray[3];
    if (weatherArray[3].includes('cloud')) {
        Day4.firstElementChild.classList.add('card-storm');
        Day4.firstElementChild.firstElementChild.removeAttribute('class');
    } else if (weatherArray[3].includes('rain')) {
        Day4.firstElementChild.classList.add('card-rain');
        Day4.firstElementChild.firstElementChild.classList.add('rain');
    } else if (weatherArray[3].includes('clear sky')) {
        Day4.firstElementChild.classList.add('card-sunny');
        Day4.firstElementChild.firstElementChild.classList.add('sunny');
    } else if (weatherArray[3].includes('snow')) {
        Day4.firstElementChild.classList.add('card-snow');
        Day4.firstElementChild.firstElementChild.classList.add('snow');
    } else if (weatherArray[3].includes('storm')) {
        Day4.firstElementChild.classList.add('card-storm');
        Day4.firstElementChild.firstElementChild.classList.add('storm');
    } else {
        Day4.firstElementChild.classList.add('card-snow');
        Day4.firstElementChild.firstElementChild.removeAttribute('class');
    }
    Day5.lastElementChild.lastElementChild.innerText = weatherArray[4];
    if (weatherArray[4].includes('cloud')) {
        Day5.firstElementChild.classList.add('card-storm');
        Day5.firstElementChild.firstElementChild.removeAttribute('class');
    } else if (weatherArray[4].includes('rain')) {
        Day5.firstElementChild.classList.add('card-rain');
        Day5.firstElementChild.firstElementChild.classList.add('rain');
    } else if (weatherArray[4].includes('clear sky')) {
        Day5.firstElementChild.classList.add('card-sunny');
        Day5.firstElementChild.firstElementChild.classList.add('sunny');
    } else if (weatherArray[4].includes('snow')) {
        Day5.firstElementChild.classList.add('card-snow');
        Day5.firstElementChild.firstElementChild.classList.add('snow');
    } else if (weatherArray[4].includes('storm')) {
        Day5.firstElementChild.classList.add('card-storm');
        Day5.firstElementChild.firstElementChild.classList.add('storm');
    } else {
        Day5.firstElementChild.classList.add('card-snow');
        Day5.firstElementChild.firstElementChild.removeAttribute('class');
    }
}


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