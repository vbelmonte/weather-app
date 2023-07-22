import { convertTZ } from './fetch-weather';

function printOutHigh(query) {
  const high = Math.floor(query.currentWeather.dailyHigh);
  return `${high}°`;
}

function printOutLow(query) {
  const low = Math.floor(query.currentWeather.dailyLow);
  return `${low}°`;
}

function printOutCurrentTemp(query) {
  const temp = Math.floor(query.currentWeather.currentTemp);
  return `${temp}°`;
}

function printOutCity(query) {
  return query.cityName;
}

function printOutDescription(query) {
  return query.currentWeather.weatherDescription;
}

function fetchWeatherIcon(code, isDay) {
  let src;
  const string = '../src/assets/images/weather-icons/';
  switch (code) {
    case 0:
      if (isDay === 1) {
        src = `${string}clear-sky-sunny.svg`;
      } else {
        src = `${string}clear-sky-moon.svg`;
      }
      break;
    case 1:
      if (isDay === 1) {
        src = `${string}mostly-clear-sunny.svg`;
      } else {
        src = `${string}mostly-clear-moon.svg`;
      }
      break;
    case 2:
      if (isDay === 1) {
        src = `${string}partly-cloudy-sunny.svg`;
      } else {
        src = `${string}partly-cloudy-moon.svg`;
      }
      break;
    case 3:
      src = `${string}overcast.svg`;
      break;
    case 45:
    case 48:
      src = `${string}fog.svg`;
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 80:
    case 81:
    case 82:
      src = `${string}drizzle.svg`;
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      src = `${string}rain.svg`;
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      src = `${string}snow.svg`;
      break;
    case 95:
    case 96:
    case 99:
      src = `${string}thunderstorm.svg`;
      break;
    default:
      break;
  }

  return src;
}

function printOutWeatherIcon(query) {
  const code = query.hourly.weathercode[0];
  const localHour = convertTZ(new Date(), query.timezone).getHours();
  const value = query.hourly.is_day[localHour];

  return fetchWeatherIcon(code, value);
}

export function updateCurrentForecastLayout(query) {
  const currentCity = document.getElementById('current-city');
  currentCity.textContent = printOutCity(query);

  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = printOutCurrentTemp(query);

  const dailyHigh = document.getElementById('current-high');
  dailyHigh.textContent = printOutHigh(query);

  const dailyLow = document.getElementById('current-low');
  dailyLow.textContent = printOutLow(query);

  const forecastDescription = document.getElementById('forecast-description');
  forecastDescription.textContent = printOutDescription(query);

  const currentWeatherIcon = document.getElementById('current-weather');
  currentWeatherIcon.src = printOutWeatherIcon(query);
}

export default function createCurrentForecast() {
  const section = document.createElement('section');
  section.id = 'current-forecast';

  const currentCityDiv = document.createElement('div');
  const currentCity = document.createElement('h1');
  currentCity.id = 'current-city';
  currentCity.textContent = 'Ventura';
  currentCityDiv.appendChild(currentCity);

  const currentDetailsDiv = document.createElement('div');
  currentDetailsDiv.classList.add('forecast-details');

  const currentWeatherDiv = document.createElement('div');
  const currentWeatherImg = document.createElement('img');
  currentWeatherImg.id = 'current-weather';
  currentWeatherImg.src = '../src/assets/images/forecast-current/partly-cloudy.svg';
  currentWeatherDiv.appendChild(currentWeatherImg);

  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('bottom');

  const currentTempDiv = document.createElement('div');
  const currentTemp = document.createElement('h1');
  currentTemp.classList.add('bold');
  currentTemp.id = 'current-temp';
  currentTemp.textContent = '74°F';
  currentTempDiv.appendChild(currentTemp);
  bottomDiv.appendChild(currentTempDiv);

  const forecastDescriptionDiv = document.createElement('div');
  const forecastDescription = document.createElement('h4');
  forecastDescription.classList.add('bold');
  forecastDescription.id = 'forecast-description';
  forecastDescription.textContent = 'Partly cloudy';
  forecastDescriptionDiv.appendChild(forecastDescription);
  bottomDiv.appendChild(forecastDescriptionDiv);

  const highLowDiv = document.createElement('div');
  highLowDiv.classList.add('high-low');

  const highDiv = document.createElement('div');
  const highP = document.createElement('p');
  highP.textContent = 'H: ';

  const high = document.createElement('span');
  high.id = 'current-high';
  high.textContent = '74°';
  highP.appendChild(high);
  highDiv.appendChild(highP);

  const lowDiv = document.createElement('div');
  const lowP = document.createElement('p');
  lowP.textContent = 'L: ';

  const low = document.createElement('span');
  low.id = 'current-low';
  low.textContent = '54°';
  lowP.appendChild(low);
  lowDiv.appendChild(lowP);

  highLowDiv.appendChild(highDiv);
  highLowDiv.appendChild(lowDiv);
  bottomDiv.appendChild(highLowDiv);

  currentDetailsDiv.appendChild(currentWeatherDiv);
  currentDetailsDiv.appendChild(bottomDiv);

  section.appendChild(currentCityDiv);
  section.appendChild(currentDetailsDiv);

  return section;
}
