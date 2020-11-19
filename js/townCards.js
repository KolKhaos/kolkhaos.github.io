const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
                let town = document.createElement('section');
                let info = document.createElement('div');

                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let pop = document.createElement('p');
                let found = document.createElement('p');
                let rainFall = document.createElement('p');
                let image = document.createElement('img');

                town.appendChild(info);

                town.setAttribute('class', 'locales');
                info.setAttribute('class', 'info');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                pop.textContent = 'Population:' + ' ' + townsp[i].currentPopulation;
                found.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
                rainFall.textContent = 'Avg Rainfall:' + ' ' + towns[i].averageRainfall;


                info.appendChild(h2);
                info.appendChild(h3);
                info.appendChild(pop);
                info.appendChild(found);
                info.appendChild(rainFall);

                image.setAttribute('class', 'townPic');

                image.setAttribute('src', 'towns[i].photo');
                image.setAttribute('alt', 'Photo of' + towns[i].name);

                town.appendChild(image);

                document.querySelector('div.towns').appendChild(town);
            }
        };
    });