const prestonAPI = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a"
const prestonForeAPI =
    "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a";



fetch(prestonAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        const prestonTemp = document.querySelector('#prestontemp');
        const prestonHum = document.querySelector('#prestonhum');
        const prestonWind = document.querySelector('#prestonspeed');
        const prestonDes = document.querySelector('#prestonsum');

        let temp = parseFloat(jsObject.main.temp);
        let speed = parseFloat(jsObject.wind.speed);
        let wc = "N/A";
        if (temp <= 50 && speed >= 3) {
            let f = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            wc = Math.round(f);
        } else {
            document.getElementById("prestonchill").textContent = "N/A";
        }

        document.getElementById('prestonchill').innerHTML = wc + '&#8457';
        prestonTemp.innerHTML = jsObject.main.temp + "&#8457;";
        prestonHum.innerHTML = jsObject.main.humidity + "&#37;";
        prestonWind.innerHTML = jsObject.wind.speed + " mph";
        prestonDes.innerHTML = jsObject.weather[0].description;

    });

fetch(prestonForeAPI)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter((x) =>
            x.dt_txt.includes("18:00:00")
        );
        console.log(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].td_txt);
            document.getElementById(`prestonDay${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`prestonforeTemp${day+1}`).textContent = forecast[day].main.temp;
        }
    });