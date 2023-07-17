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

async function getUVIndex(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max&timezone=auto`);

  return result;
}

async function getChanceOfRain(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_probability_max&timezone=auto`);

  return result;
}

async function getHourlyForecast(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=auto`);

  return result;
}

async function getThreeDayForecast(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&timezone=auto&forecast_days=3`);

  return result;
}

async function fetchCurrentWeather(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const cityName = query.name;

  const weatherData = await getWeatherData(latitude, longitude, cityName);

  return weatherData;
}

export default async function fetchWeather(query) {
  const currentWeatherData = await fetchCurrentWeather(query);

  return currentWeatherData;
}
