$(document).ready(function() {
getLocation();
});

function getLocation() {
    var countryCode;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            getWeather(lat,lon);
        });
    }
}

function getWeather(lat,lon) {
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
    lat + '&lon=' + lon + '&units=imperial' + '&type=accurate' + key;
    if(window.location.protocol === 'https:') weatherAPI = 'https://cors-anywhere.herokuapp.com/' + weatherAPI;
    $.getJSON(weatherAPI,function (weatherData) {
        //Get temperature
        temp = weatherData.main.temp.toFixed(0);
        tempCelc = ((temp - 32) * (5 / 9)).toFixed(0);

        $('#city').text(weatherData.name+ ', ' + weatherData.sys.country);

          $('#temperature').text(temp + '° F');

        //Get weather condition of place e.g sunny,clouds
               var condition = weatherData.weather[0].description,
               	conditionGrp = weatherData.weather[0].main,
                id = weatherData.weather[0].id,
                iconClass,
                bgIndex;


              //write final weather conditions and wind information to the page
              $('#condition').html(condition);

        //Change image using Jquery to mach weather condition
              switch(conditionGrp){
                case 'Clear':
                $("#weather-img").attr("src","https://s27.postimg.org/e2bhu8yxv/clearsky.png");
                break;

                case 'Clouds':
                $("#weather-img").attr("src","https://s28.postimg.org/on5ysucrh/cloud.png");
                break;

                case 'Sunny':
                $("#weather-img").attr("src","https://s27.postimg.org/evo3mv4yr/sunny.png");
                break;

                case 'Rain':
                $("#weather-img").attr("src","https://s27.postimg.org/70dk81vc3/rain.png");
                break;

                case 'Thunderstorm':
                $("#weather-img").attr("src","https://s27.postimg.org/fnvczsyjn/thunderstorm.png");
                break;

                case 'Snow':
                $("#weather-img").attr("src","https://s27.postimg.org/83xok0fz7/snow.jpg");
                break;

                case 'Atmosphere':
                $("#weather-img").attr("src","https://s24.postimg.org/kw4f2shc5/haze.jpg");
                break;

                case 'Drizzle':
                $("#weather-img").attr("src","https://s24.postimg.org/q4zg0nzr9/drizzle.png");
                break;

                case 'Extreme':
                $("#weather-img").attr("src","https://s24.postimg.org/axjggb7wl/extreme.jpg");
                break;
              }
            })
            .fail(function(err) {
              alert('There was an error retrieving your weather data.');
            });
        }

        //toggle between celsius / fahrenheit
        $('#convertBtn').click(function() {
          if ($('#temperature').text().indexOf('F') > -1) {
            $('#temperature').text(tempCelc + '° C');
          } else {
            $('#temperature').text(temp + '° F');
          }

          this.blur(); // remove focus from the button

    });


var key = '&APPID=8fd6d893c057f06c8178e93026a43e95';
