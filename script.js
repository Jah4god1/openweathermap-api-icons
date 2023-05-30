const apiKey = '192e78d561eb519b938c8301a6e04bd5';
// const city = 'london';
const myInput = document.querySelector ("#myInput")
const searchButton = document.querySelector ("#search-button")
const oneDay = document.querySelector ("#one-day")
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=&lon=&units=imperial&appid=${'192e78d561eb519b938c8301a6e04bd5'}`

async function getData(){
const response = await fetch(apiUrl);
const data = await response.json();
console.log(data);
}

function findCity(e){
    e.preventDefault();
    let city = myInput.value;
    latLon(city)
}

function latLon(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Handle the API response data
        // console.log(data);



        var lat = data.coord.lat;
        var lon = data.coord.lon;

        forecast(lat, lon, city)
    })
    .catch(error => {
        // Handle any errors that occurred during the API call
        console.error(error);


    })
}


function forecast(lat, lon, city){
   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${'192e78d561eb519b938c8301a6e04bd5'}`
    // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKey}`
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Handle the API response data
        console.log(data);
        // let temp = data.list[0].main.temp;
        let tempEl = document.createElement("card-body");
        tempEl.textContent = `Temp: ${data.list[0].main.temp}F`
        oneDay.append(tempEl)
        

    })
    .catch(error => {
        // Handle any errors that occurred during the API call
        console.error(error);
    });
}

searchButton.addEventListener("click", findCity)
function myfunc (event) {
    event.preventDefault();

    var getInput = document.getElementById('#myInput')
    console.log('#myInput');
}

    function populateWeatherIconAndTemperature(lat, lon, city) {
        const apiUrl =  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            const weatherCode = data.list[0].weather[0].icon;
            const temperature = Math.round(data.list.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
            const weatherIconSrc = `https://openweathermap.org/img/wn/${weatherCode}.png`;
            const weatherIcon = $('<img>').attr('src', weatherIconSrc);
            $('#weather-icon').empty().append(weatherIcon);
  
            $('#temperature').text(`Temperature: ${temperature}°C`);
          });
      }
    
      
      showWeather: (resp) => {
        console.log(resp);
        let row = document.querySelector('weather.row');

        row.innerHtml = resp.daily.map(day => {
            return  '<div id="one-day"></div>'
        })
        .join(' ');

        let html = ` <div class="col">
        <div class="card" style="width: 30vw">
          <h5 class="card-title p-2">Date</h5>
    <img
          src="http://openweathermap.org/img/wn/10d@4x.png"
          class="card-img-top"
          alt="Weather description"
        />
        <div class="card-body">
          <h3 class="card-title"><div id="one-day"></div></h3>
          <p class="card-text">High Temp Low Temp</p>`
      }
