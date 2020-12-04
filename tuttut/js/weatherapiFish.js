const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681 &units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a"



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = document.querySelector('#current-temp');
        const weatherIcon = document.querySelector('#icon');
        const weatherImg = document.querySelector('#imagesrc');

        currentTemp.innerHTML = jsObject.main.temp;

        weatherImg.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        weatherIcon.setAttribute('src', isrc);
        weatherIcon.setAttribute('alt', jsObject.weather[0].description);

    });