
//Hamburger
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('responsive')
}, false);


// To solve the mid resizing issue with responsive class on
window.onresize = () => {
	if (window.innerWidth > 760) mainnav.classList.remove('responsive')
};

//Scoots Rental Table

const requestScoots = 'https://kolkhaos.github.io/scoots/files/scoots.json'

fetch(requestScoots)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject);
		const vehicles = jsonObject['vehicles']; 
		for (let i = 0; i < vehicles.length; i++) {
			let trow = document.createElement('tr');			

			let rsName = document.createElement('td');
			let rsPeep = document.createElement('td');
			let rsHal1 = document.createElement('td');
			let rsFul1 = document.createElement('td');
			let rsHal2 = document.createElement('td');
			let rsFul2 = document.createElement('td');

			trow.appendChild(rsName);
			trow.appendChild(rsPeep);
			trow.appendChild(rsHal1);
			trow.appendChild(rsFul1);
			trow.appendChild(rsHal2);
			trow.appendChild(rsFul2);

			rsName.setAttribute('colspan', '4');
			rsPeep.setAttribute('colspan', '2');

			rsName.textContent = vehicles[i].name;
			rsPeep.textContent = vehicles[i].persons;
			rsHal1.textContent = vehicles[i].resHalf;
			rsFul1.textContent = vehicles[i].resFull;
			rsHal2.textContent = vehicles[i].walkHalf;
			rsFul2.textContent = vehicles[i].walkFull;

			

			document.querySelector('tbody.rnBody').appendChild(trow);
		}
	});