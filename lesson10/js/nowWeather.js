const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        const currentTemp = document.querySelector('#dailytemp');
        const currentHum = document.querySelector('#dailyhum');
        const currentWind = document.querySelector('#dailyspeed');
        const currentDes = document.querySelector('#dailysum');

        let temp = parseFloat(jsObject.main.temp);
        let speed = parseFloat(jsObject.wind.speed);
        let wc = "N/A";
        if (temp <= 50 && speed >=3) {
            let f = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            wc = Math.round(f);            
        } else {
            document.getElementById("dailychill").textContent = "N/A";
        }

        document.getElementById('dailychill').innerHTML = wc + '&#8457';
        currentTemp.innerHTML = jsObject.main.temp + "&#8457;";
        currentHum.innerHTML = jsObject.main.humidity + "&#37;";
        currentWind.innerHTML = jsObject.wind.speed + " mph";
        currentDes.innerHTML = jsObject.weather[0].description;               
       
    });