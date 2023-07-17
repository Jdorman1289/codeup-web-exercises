(function () {
    "use strict";

// Base URL for forecast API
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}&units=imperial`;
    }

    const WEATHER_COORDINATES = ['29.4260', '-98.4861'];

    let URL = getWeatherURL(...WEATHER_COORDINATES);

    const Day1 = document.querySelector('.day1');
    const Day2 = document.querySelector('.day2');
    const Day3 = document.querySelector('.day3');
    const Day4 = document.querySelector('.day4');
    const Day5 = document.querySelector('.day5');
    let mapDiv = document.querySelector("iframe");
    const searchInput = document.querySelector('input');
    let forecastLocationName = document.querySelector('#forecastName');
    forecastLocationName.innerText = `San Antonio, Texas`

    function runAjax() {
        $.ajax({
            url: URL,
            type: 'GET',
        }).done((data) => {
            let weatherArray = [];
            let minMaxTemps = returnMinMaxTemps(data);
            let icons = [];

            data.list.forEach((day, index) => {
                if (index % 8 === 0) {
                    weatherArray.push(day.weather[0].description)
                    icons.push(day.weather[0].icon)
                }
            });
            showWeather(weatherArray, icons);
            showDatesAndTemps(minMaxTemps);
        })
            .fail(console.error);
    }

    runAjax();

    function showDatesAndTemps(minMaxTemps) {
        Day1.lastElementChild.firstElementChild.innerText = `TODAY:\n\n${parseInt(minMaxTemps[0].max)} ℉`;
        Day2.lastElementChild.firstElementChild.innerText = `${minMaxTemps[1].date}:\n\n ${parseInt(minMaxTemps[1].max)} ℉`;
        Day3.lastElementChild.firstElementChild.innerText = `${minMaxTemps[2].date}:\n\n ${parseInt(minMaxTemps[2].max)} ℉`;
        Day4.lastElementChild.firstElementChild.innerText = `${minMaxTemps[3].date}:\n\n ${parseInt(minMaxTemps[3].max)} ℉`;
        Day5.lastElementChild.firstElementChild.innerText = `${minMaxTemps[4].date}:\n\n ${parseInt(minMaxTemps[4].max)} ℉`;
    }

    function showWeather(weatherArray, icons) {
        Day1.lastElementChild.lastElementChild.innerText = weatherArray[0];
        Day1.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[0]}@4x.png`;

        Day2.lastElementChild.lastElementChild.innerText = weatherArray[1];
        Day2.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[1]}@4x.png`;

        Day3.lastElementChild.lastElementChild.innerText = weatherArray[2];
        Day3.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[2]}@4x.png`;

        Day4.lastElementChild.lastElementChild.innerText = weatherArray[3];
        Day4.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[3]}@4x.png`;

        Day5.lastElementChild.lastElementChild.innerText = weatherArray[4];
        Day5.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[4]}@4x.png`;

    }

    document.querySelector('button').addEventListener('click', () => {
        geocode(searchInput.value, MAPBOX_TOKEN).then((coors) => {
            URL = getWeatherURL(coors[1], coors[0]);
            runAjax();
            map.setCenter([coors[0], coors[1]]);
            searchInput.value = '';
        })
    })

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


})();