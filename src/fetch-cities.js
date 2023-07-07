function splitQuery(query) {
  const newQuery = query.split(',');
  return newQuery;
}

async function checkByPostalCode(query) {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${query}&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    // return error
    console.log(error);
    return error;0
  }
}

async function checkByCity(query) {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });

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
  // break up query into correct parts (eg. city, state, country, zip code)
  const newQuery = splitQuery(query);
  /*
     * check by postal code
     * if postal code fulfills, return city and city data
     * if postal code fails, check by city name
     * if city name fulfills, return city and city data
     * if city name fails, return error
     */
}
