export function convertTZ(date, tzString) {
  return new Date(date.toLocaleString('en-US', { timeZone: tzString }));
}

export function fetchWeatherIcon(code, isDay) {
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

function getWeatherDescription(code) {
  const weatherCodes = {
    0: 'Clear Sky',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing Rime Fog',
    51: 'Light Drizzle',
    53: 'Moderate Drizzle',
    55: 'Dense Drizzle',
    56: 'Freezing, Light Drizzle',
    57: 'Freezing, Dense Drizzle',
    61: 'Light Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    66: 'Freezing, Light Rain',
    67: 'Freezing, Heavy Rain',
    71: 'Light Snow',
    73: 'Moderate Snow',
    75: 'Heavy Snow',
    77: 'Snow Grains',
    80: 'Light Showers',
    81: 'Moderate Showers',
    82: 'Heavy Showers',
    85: 'Light Snow Shower',
    86: 'Heavy Snow Shower',
    95: 'Thunderstorm',
    96: 'Thunderstorm and Light Hail',
    99: 'Thunderstorm and Heavy Hail',
  };

  return weatherCodes[code];
}

function getDay(code) {
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  return days[code];
}

function createCurrentWeather(query) {
  const date = new Date();
  const currentHour = convertTZ(new Date(), query.timezone).getHours();

  const currentTemp = query.hourly.temperature_2m[currentHour];
  const dailyHigh = query.daily.temperature_2m_max[0];
  const dailyLow = query.daily.temperature_2m_min[0];
  const weatherCode = query.hourly.weathercode[currentHour];
  const weatherDescription = getWeatherDescription(weatherCode);

  return {
    currentTemp, dailyHigh, dailyLow, weatherDescription,
  };
}

async function fetchCurrentWeather(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const cityName = query.name;

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`);

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();
    const currentWeather = createCurrentWeather(result);
    const weatherData = { cityName, ...result, currentWeather };

    return weatherData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function fetchWeatherDefaultLocation() {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`);

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }

    const result = await response.json();
    const currentWeather = createCurrentWeather(result);
    const cityName = 'London';
    const weatherData = { cityName, ...result, currentWeather };

    return weatherData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getThreeDayForecast(query) {
  const date = new Date();
  const day = date.getDay();
  const high = [];
  const low = [];
  const cor = [];
  const weatherDescription = [];
  const weatherCode = [];
  const days = [];
  // get temps
  for (let i = 1; i < 4; i += 1) {
    high.push(query.daily.temperature_2m_max[i]);
    low.push(query.daily.temperature_2m_min[i]);
    cor.push(query.daily.precipitation_probability_max[i]);
    weatherDescription.push(getWeatherDescription(query.daily.weathercode[i]));
    weatherCode.push(query.daily.weathercode[i]);
  }
  // assign days
  for (let i = day + 1; i < (day + 4); i += 1) {
    days.push(getDay(i % 7));
  }

  return {
    high, low, cor, days, weatherDescription, weatherCode,
  };
}

export async function fetchDefaultWeather() {
  const currentWeatherData = await fetchWeatherDefaultLocation();
  const threeDayForecast = await getThreeDayForecast(currentWeatherData);

  return { ...currentWeatherData, threeDayForecast };
}

export default async function fetchWeather(query) {
  const currentWeatherData = await fetchCurrentWeather(query);
  const threeDayForecast = await getThreeDayForecast(currentWeatherData);

  return { ...currentWeatherData, threeDayForecast };
}
