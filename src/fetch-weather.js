async function getWeatherData(lat, lon, cityName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }

    const result = await response.json();
    result.name = cityName;

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
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

function createCurrentWeather(query) {
  const date = new Date();
  const currentHour = date.getHours();

  const currentTemp = query.hourly.temperature_2m[currentHour];
  const dailyHigh = query.daily.temperature_2m_max[0];
  const dailyLow = query.daily.temperature_2m_min[0];
  const weatherCode = query.hourly.weathercode[currentHour];
  const weatherDescription = getWeatherDescription(weatherCode);

  return {
    currentTemp, dailyHigh, dailyLow, weatherDescription,
  };
}

async function getUVIndex(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max&timezone=auto`);

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();
    const UVIndex = Math.floor(result.daily.uv_index_max[0]);

    return UVIndex;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getChanceOfRain(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_probability_max&timezone=auto`);

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();
    const chanceOfRain = result.daily.precipitation_probability_max[0];

    return chanceOfRain;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAdditionalWeatherDetails(query) {
  const UVIndex = await getUVIndex(query);
  const chanceOfRain = await getChanceOfRain(query);

  const additionalForecastDetails = {
    chance_of_rain: chanceOfRain, uv_index: UVIndex,
  };

  return additionalForecastDetails;
}

async function fetchCurrentWeather(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const cityName = query.name;

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto`);

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
  /* const weatherData = await getWeatherData(latitude, longitude, cityName);

  return weatherData; */
}

async function getHourlyForecast(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=auto`);

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getThreeDayForecast(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&timezone=auto&forecast_days=3`);

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default async function fetchWeather(query) {
  const currentWeatherData = await fetchCurrentWeather(query);
  const additionalCurrentWeatherData = await getAdditionalWeatherDetails(query);
  const hourlyForecast = await getHourlyForecast(query);
  const threeDayForecast = await getThreeDayForecast(query);

  const data = {
    ...currentWeatherData, ...additionalCurrentWeatherData, hourlyForecast, threeDayForecast,
  };

  console.log(data);
  return data;
}
