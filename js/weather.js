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
        let date1 = new Date(minMaxTemps[1].date).toDateString();
        let date2 = new Date(minMaxTemps[2].date).toDateString();
        let date3 = new Date(minMaxTemps[3].date).toDateString();
        let date4 = new Date(minMaxTemps[4].date).toDateString();
        let date5 = new Date(minMaxTemps[5].date).toDateString();

        Day1.lastElementChild.firstElementChild.innerText = `${date1}:\n\n${parseInt(minMaxTemps[0].max)} ℉`;
        Day2.lastElementChild.firstElementChild.innerText = `${date2}:\n\n ${parseInt(minMaxTemps[1].max)} ℉`;
        Day3.lastElementChild.firstElementChild.innerText = `${date3}:\n\n ${parseInt(minMaxTemps[2].max)} ℉`;
        Day4.lastElementChild.firstElementChild.innerText = `${date4}:\n\n ${parseInt(minMaxTemps[3].max)} ℉`;
        Day5.lastElementChild.firstElementChild.innerText = `${date5}:\n\n ${parseInt(minMaxTemps[4].max)} ℉`;
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
            forecastLocationName.innerText = searchInput.value
            map.setCenter([coors[0], coors[1]]);
            marker.setLngLat([coors[0], coors[1]]).addTo(map);
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
    const marker = new mapboxgl.Marker({draggable: true}).setLngLat([-98.4916, 29.4252]).addTo(map);
    window.map = map;

    marker.on('dragend', () => {
        const lngLat = marker.getLngLat();
        URL = getWeatherURL(lngLat.lat, lngLat.lng);
        runAjax();
        reverseGeocode(lngLat, MAPBOX_TOKEN).then((data) => {
            forecastLocationName.innerText = data;
        });
    });

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