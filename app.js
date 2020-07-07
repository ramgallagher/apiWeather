let weatherPage = document.getElementById('weatherPage');
let searchButton = document.getElementById('btnSearch');
let welcomePage = document.getElementById('welcomePage');
var inputValue = document.querySelector('.inputValue');
var name = document.getElementById('city');
var temp = document.querySelector('.temp');
var desc = document.getElementById('description');
var iconElement = document.getElementById('icon');
var min = document.getElementById('minimum');
var max = document.getElementById('maximum');
var wind = document.getElementById('windSpeed');
var humidity = document.getElementById('humidity');




weatherPage.style.display = "none";
// welcomePage.style.display = "none"


searchButton.addEventListener('click', e => {

    weatherPage.style.display = "block";
    welcomePage.style.display = "none";


    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=9e868b9d32496964a1079279c1f8a077&units=metric')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var description = data['weather'][0]['description']
            var countryValue = data['sys']['country'];
            var tempValue = data['main']['temp'];
            var icon = data['weather'][0]['icon'];
            var minValue = data['main']['temp_min'];
            var maxValue = data['main']['temp_max'];
            var humidityValue = data['main']['humidity'];
            var windValue = data['wind']['speed'];
            console.log(data);
            console.log(" name value es: " + nameValue);
            temp.innerHTML = Math.round(tempValue) + 'º';
            iconElement.innerHTML = `<img src="icons/${icon}.png"/>`;
            city.innerHTML = nameValue + ', ' + countryValue;
            desc.innerHTML = description;
            min.innerHTML = Math.round(minValue) + 'º';
            max.innerHTML = Math.round(maxValue) + 'º';
            humidity.innerHTML = humidityValue + '%';
            wind.innerHTML = windValue + 'km/h';
            console.log(countryValue);
            console.log(icon);

        })


    .catch(err => alert("Wrong city name!"))
})

inputValue.addEventListener("keyup", ev => {

    if (ev.keyCode === 13) {
        ev.preventDefault();
        searchButton.click();
    }
})