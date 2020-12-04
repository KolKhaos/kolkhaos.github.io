const sodaAPI = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a"
const sodaForeAPI =
    "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a";


fetch(sodaAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        const sodaTemp = document.querySelector('#sodatemp');
        const sodaHum = document.querySelector('#sodahum');
        const sodaWind = document.querySelector('#sodaspeed');
        const sodaDes = document.querySelector('#sodasum');

        let temp = parseFloat(jsObject.main.temp);
        let speed = parseFloat(jsObject.wind.speed);
        let wc = "N/A";
        if (temp <= 50 && speed >= 3) {
            let f = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            wc = Math.round(f);
        } else {
            document.getElementById("sodachill").textContent = "N/A";
        }

        document.getElementById('sodachill').innerHTML = wc + '&#8457';
        sodaTemp.innerHTML = jsObject.main.temp + "&#8457;";
        sodaHum.innerHTML = jsObject.main.humidity + "&#37;";
        sodaWind.innerHTML = jsObject.wind.speed + " mph";
        sodaDes.innerHTML = jsObject.weather[0].description;

    });

fetch(sodaForeAPI)
    .then((response) => response.json())
    .then((jsObject) => {      

        const forecast = jsObject.list.filter((x) =>
            x.dt_txt.includes("18:00:00")
        );
        console.log(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].td_txt);
            document.getElementById(`sodaDay${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`sodaforeTemp${day+1}`).textContent = forecast[day].main.temp;
        }
    });