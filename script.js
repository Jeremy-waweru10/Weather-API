const apiKey = "9a0f5820db6554bf493e3a6aa035fd98";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
  const location = locationInput.value.trim();//changes from 'arialValuemax' to 'value'
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      //Update the webpage with weather information
        console.log(data);
        locationElement.textContent = `${data.name}, ${data.sys.country}`;//update location on webpage
        temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
    })
    .catch(error => {
        locationElement.textContent = "Error fetching weather data";
        temperatureElement.textContent = "";
        descriptionElement.textContent = "";
        console.error("Error:", error);

React

Reply



    })
}
fetchWeather("Nairobi");