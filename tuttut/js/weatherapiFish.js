const fishAPI = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a"
const fishForeAPI =
    "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a";



fetch(fishAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        const fishTemp = document.querySelector('#fishtemp');
        const fishHum = document.querySelector('#fishhum');
        const fishWind = document.querySelector('#fishspeed');
        const fishDes = document.querySelector('#fishsum');

        let temp = parseFloat(jsObject.main.temp);
        let speed = parseFloat(jsObject.wind.speed);
        let wc = "N/A";
        if (temp <= 50 && speed >= 3) {
            let f = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            wc = Math.round(f);
        } else {
            document.getElementById("fishchill").textContent = "N/A";
        }

        document.getElementById('fishchill').innerHTML = wc + '&#8457';
        fishTemp.innerHTML = jsObject.main.temp + "&#8457;";
        fishHum.innerHTML = jsObject.main.humidity + "&#37;";
        fishWind.innerHTML = jsObject.wind.speed + " mph";
        fishDes.innerHTML = jsObject.weather[0].description;

    });

fetch(fishForeAPI)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter((x) =>
            x.dt_txt.includes("18:00:00")
        );
        console.log(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].td_txt);
            document.getElementById(`fishDay${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`fishforeTemp${day+1}`).textContent = forecast[day].main.temp;
        }
    });