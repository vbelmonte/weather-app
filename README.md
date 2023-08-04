# Weather App
## Description
This is a weather app that displays weather information from around the world. Users can search by zip code or city name, which will return  a list of matching results. Weather data will load when users click on a result and will list the following information:

 - City name
 - Current temperature
 - Current forecast description and weather icon
 - Daily high
 - Daily low
 - Precipitation probability
 - Current humidity levels
 - Wind speed
 - UV index levels
 - 24-hour forecast featuring hourly temperatures
 - 3 day forecast featuring forecast description, weather icon, and high and low temperatures

Additional features include:
 - Fahrenheit to celsius conversion

This app was created as a project from The Odin Project and is intended to demonstrate the concept of asynchronous programming. This project utilizes Open Weather's Geocoding API to provide location results and Open Meteo's API to provide weather data.

In the next release, the following features are intended to be included:
 - Imperial to metric conversions for wind speed
 - A dark theme



## Technologies Used
### Languages
 - HTML
 - CSS
 - Javascript

### Tools
 - Open Meteo API
 - Open Weather API
 - Webpack

### Programming Concepts

 - Asynchronous programming
 - ES6 Modules


## How To Run This Project
A live demo of this project is hosted here on Github:

https://vbelmonte.github.io/weather-app


## How To Use The Weather App
Upon initial load, the default city is set to London, GB.

### How to search for a city
1. Click on the  ![magnifying glass](https://i.ibb.co/rxCwd5v/magnifying-glass.png) button on the upper right hand corner of your screen.
2. Enter city name or postal code.

	Tip #1: For US postal codes, it suffices to enter the postal code. Otherwise, for cities outside of the US, enter the postal code followed by the country code (use country codes established by [ISO 3166](https://www.iso.org/obp/ui/#search/code/) standards).
	
	Tip #2: For cities, it suffices to search by city name only. For more accurate results, enter city name followed by country code (non-US cities). For US cities, enter the city name followed by state and (optional) country code.
	
3. Hit the `Enter` button on your keyboard.
4. Search results will propogate. Click on the desired result and weather data will display.