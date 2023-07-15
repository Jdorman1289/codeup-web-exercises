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