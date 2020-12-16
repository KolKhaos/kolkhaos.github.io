const cozumelAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=20.499998&lon=-86.9499962&exclude=hourly,minutely,daily&appid=966d8c0ed76ee5b0463da0dd4a1c228a"
// const cozumelForeAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=20.499998&lon=-86.9499962&exclude=current,minutely,hourly,alerts&appid=966d8c0ed76ee5b0463da0dd4a1c228a";



fetch(cozumelAPI)
	.then((response) => response.json())
	.then((jsObject) => {
		
		const weatherState = document.querySelector('#weatherState');
		const weatherTemp = document.querySelector('#weatherTemp');
		const weatherFeels = document.querySelector('#weatherFeels');
		const weatherHum = document.querySelector('#weatherHum');

		
		weatherState.innerHTML = jsObject.current.weather;
		weatherTemp.innerHTML = jsObject.current.temp + "&#37;";
		weatherFeels.innerHTML = jsObject.current.feels_like + "&#8457;";
		weatherHum.innerHTML = jsObject.current.humidity; +"&#37;"

	});

//fetch(cozumelForeAPI)
/*	.then((response) => response.json())
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
	}); */