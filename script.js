const apiKey = "9a0f5820db6554bf493e3a6aa035fd98";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");
const loadingElement = document.getElementById("loading");




searchButton.addEventListener("click", () => {
  const location = locationInput.value.trim();//changes from 'arialValuemax' to 'value'
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  //Display a loading message
    loadingElement.style.display = "block"

    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      //Update the webpage with weather information
        console.log(data);
        locationElement.textContent = `${data.name}, ${data.sys.country}`;//update location on webpage
        temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;//update temperature on the webpage
        descriptionElement.textContent = `Weather: ${data.weather[0].description}`;//update description on the webpage
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;//update the humidity on the webpge in percentage form from the API
        windElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;//update the windspeed on the webpage
    })
    .catch(error => {
        locationElement.textContent = "Error fetching weather data";
        temperatureElement.textContent = "";
        descriptionElement.textContent = "";
        humidityElement.textContent = "";
        windElement.textContent = "";

        console.error("Error:", error);

    }) 
    .finally(() => {
      // Hide loading message after data is fetched 
      loadingElement.style.display = "none";
    });
} 

fetchWeather("Nairobi");
