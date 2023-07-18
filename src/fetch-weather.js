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

  const weatherData = await getWeatherData(latitude, longitude, cityName);

  return weatherData;
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

  return data;
}
