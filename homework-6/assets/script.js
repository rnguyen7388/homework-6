
$(document).ready(function() {

   $(".btn").on("click", function(event) {
    event.preventDefault()
    var userInput = $(".btn-dark").val()
    console.log(userInput)
    weather(userInput)
    zipCode(userInput)
   });

var userInput = $(".input").val();
var appID = "066740323a96fb63bbe793994a938d5d";
var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=";
var queryURL = weatherAPI + userInput + "&appid=" + appID;

function weather(city) {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)

        let cityName = response.name;
        let temp = response.main.temp;
        let humidity = response.main.humidity;
        let windSpeed = response.wind.speed;
        let weather = response.weather;

        column.append(cityName, temp, humidity, windSpeed, weather);
     })
   };
});

function zipCode(city) {
var zipCodeAPI = "api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}";
var queryURL2 = zipCodeAPI + userInput + "&appid=" + appID;

    $.ajax ({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        
        let cityName = response.name;
        let temp = response.main.temp;
        let humidity = response.main.humidity;
        let windSpeed = response.wind.speed;
        let weather = response.weather;

        column.append(cityName, temp, humidity, windSpeed, weather);
    });
};