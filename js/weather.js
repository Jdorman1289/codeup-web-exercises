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
            console.log(icons);
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

    function updateMap(lat, lon) {
        let mapSrc = `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&width=1130&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&imperialWind=default&imperialTemp=default&radarRange=-1`;
        document.querySelector("iframe").src = mapSrc;
    }

    updateMap(WEATHER_COORDINATES[0], WEATHER_COORDINATES[1]);

    document.querySelector('button').addEventListener('click', () => {
        geocode(searchInput.value, MAPBOX_TOKEN).then((coors) => {
            URL = getWeatherURL(coors[1], coors[0]);
            forecastLocationName.innerText = `${searchInput.value}`;
            runAjax();
            updateMap(coors[1], coors[0]);
            searchInput.value = '';
        })
    })
})();