async function checkByPostalCode(postalCode, countryCode) {
  try {
    let response;
    if (countryCode === undefined) {
      response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${postalCode}&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });
    } else {
      response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${postalCode},${countryCode}&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });
    }
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    // return error
    console.log(error);
    return error;
  }
}

async function checkByCity(city, state, country) {
  try {
    let response;
    if (state === undefined && country === undefined) {
      response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });
    } else if (state === undefined) {
      response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });
    } else {
      response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });
    }
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    // return error
    console.log(error);
    return error;
  }
}

function checkQuery(query) {
  /**
     * break up query into correct parts (eg. city, state, country, zip code)
     * check by postal code
     * if postal code fulfills, return city and city data
     * if postal code fails, check by city name
     * if city name fulfills, return city and city data
     * if city name fails, return error
     */
}
