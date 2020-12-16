const cozumelAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=20.499998&lon=-86.9499962&exclude=hourly,minutely&units=imperial&appid=966d8c0ed76ee5b0463da0dd4a1c228a"



fetch(cozumelAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);
        const weatherState = document.querySelector('#weatherState');
        const weatherTemp = document.querySelector('#weatherTemp');
        const weatherFeels = document.querySelector('#weatherFeels');
        const weatherHum = document.querySelector('#weatherHum');
        const forecastTemp0 = document.querySelector('#fore0');
        const forecastTemp1 = document.querySelector('#fore1');
        const forecastTemp2 = document.querySelector('#fore2');


        weatherState.innerHTML = jsObject.current.weather[0].main;
        weatherTemp.innerHTML = jsObject.current.temp + "&#8457;";
        weatherFeels.innerHTML = jsObject.current.feels_like + "&#8457;";
        weatherHum.innerHTML = jsObject.current.humidity; + "&#37;";

        forecastTemp0.innerHTML = jsObject.daily[0].temp.max + "&#8457;";
        forecastTemp1.innerHTML = jsObject.daily[1].temp.max + "&#8457;";
        forecastTemp2.innerHTML = jsObject.daily[2].temp.max + "&#8457;";

        const weatherAlert = document.querySelector('#redAlert');
        let alert = document.querySelector(".hg-alert");
        if (jsObject.alert[i] >= 0) {
            alert.style.display = "block"
            weatherAlert.innerhtml = jsObject.alert[0].event;

        };


    });