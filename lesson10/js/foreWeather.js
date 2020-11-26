const fivedayURL =
    "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a";
fetch(fivedayURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);


        const forecast = jsObject.list.filter((x) =>
            x.dt_txt.includes("18:00:00")
        );
        console.log(forecast);
        
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for ( let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].td_txt);
            document.getElementById(`forecastDay${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecastTemp${day+1}`).textContent = forecast[day].main.temp;
        }
    });