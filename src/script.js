function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
function displayWeatherCondition(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function searchCity(city) {
  let apiKey = "f91d45cb5615a81db62d90c4d20f6b10";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value.searchCity(city);
  let units = "metric";
  let apiKey = "f91d45cb5615a81db62d90c4d20f6b10";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherCondition);
}
function searchlocation(position) {
  let apiKey = "f91d45cb5615a81db62d90c4d20f6b10";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchlocation);
}
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheiTemperature = (23 * 9) / 5 + 32;
  //celsiusTemperature
  let temperatureElement = document.querySelector("#temperature");
  //alert("link is ok");
  //alert(fahrenheiTemperature);
  temperatureElement.innerHTML = Math.Round(fahrenheiTemperature); //°C
}

let celsiusTemperature = null;
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
searchCity("nairobi");
//document.querySelector("#city").innerHTML = response.data.name;
// document.querySelector("#temperature").innerHTML = Math.round(
//   response.data.main.temp
//);
//document.querySelector("#humidity").innerHTML = response.data.main.humidity;
//document.querySelector("#wind").innerHTML = Math.round(
//  response.data.wind.speed
//);
//document.querySelector("#description").innerHTML =
// response.data.weather[0].main;
//iconElement.setAttribute =
//("src",
//`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
//iconElement.setAttribute = ("alt", response.data.weather[0].description);
//function convertToCelsius(event) {
// event.preventDefault();
// let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 19;
//}
//let dateElement = document.querySelector("#date");
//let currentTime = new Date();
//dateElement.innerHTML = formatDate(currentTime);

//let currentLocationButton = document.querySelector("#current-location-button");
//currentLocationButton.addEventListener("click", getCurrentLocation);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);

//let cityElement =

//let cityInput =
//cityElement.innerHTML = cityInput.value;
//let searchForm = document.querySelector("search-form");
//searchForm.addEventListener("submit", search);
//}
//function showTemperature(response) {
//let temperature = Math.round(response.data.main.temp);
//let heading = document.querySelector("h1");
//heading.innerHTML = `The current temperature is ${temperature}°c in ${response.data.name}`;
//}

//function showPosition(position) {
//let latitude = ;
//let longitude = ;

//
