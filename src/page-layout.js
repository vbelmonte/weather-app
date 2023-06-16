function createNavigationMenu() {
  const nav = document.createElement('nav');
  const searchImg = document.createElement('img');
  searchImg.src = '../src/assets/images/layout/magnifying-glass-solid.svg';

  const logoDiv = document.createElement('div');
  const logoImg = document.createElement('img');
  logoImg.src = '../src/assets/images/layout/weather-app-logo.svg';
  logoDiv.appendChild(logoImg);
  logoDiv.classList.add('logo');

  const searchDiv = document.createElement('div');
  const searchContainerDiv = document.createElement('div');
  searchContainerDiv.classList.add('search-container');

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search-city';
  searchInput.placeholder = 'Enter city (eg. Los Angeles)';

  searchContainerDiv.appendChild(searchImg);
  searchContainerDiv.appendChild(searchInput);
  searchDiv.appendChild(searchContainerDiv);

  const hamburgerMenuLink = document.createElement('a');
  const hamburgerMenuImg = document.createElement('img');
  hamburgerMenuImg.src = '../src/assets/images/layout/hamburger-menu-svgrepo-com.svg';
  hamburgerMenuLink.appendChild(hamburgerMenuImg);

  const searchLink = document.createElement('a');
  searchLink.appendChild(searchImg);

  const additionalOptionsDiv = document.createElement('div');
  additionalOptionsDiv.appendChild(searchLink);
  additionalOptionsDiv.appendChild(hamburgerMenuLink);
  additionalOptionsDiv.classList.add('additional-options');

  nav.appendChild(logoDiv);
  nav.appendChild(additionalOptionsDiv);

  return nav;
}

function createCurrentForecast() {
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

  const currentTempDiv = document.createElement('div');
  const currentTemp = document.createElement('h1');
  currentTemp.classList.add('bold');
  currentTemp.id = 'current-temp';
  currentTemp.textContent = '74°F';
  currentTempDiv.appendChild(currentTemp);

  const forecastDescriptionDiv = document.createElement('div');
  const forecastDescription = document.createElement('h4');
  forecastDescription.classList.add('bold');
  forecastDescription.id = 'forecast-description';
  forecastDescription.textContent = 'Partly cloudy';
  forecastDescriptionDiv.appendChild(forecastDescription);

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

  currentDetailsDiv.appendChild(currentWeatherDiv);
  currentDetailsDiv.appendChild(currentTempDiv);
  currentDetailsDiv.appendChild(forecastDescriptionDiv);
  currentDetailsDiv.appendChild(highLowDiv);

  section.appendChild(currentCityDiv);
  section.appendChild(currentDetailsDiv);

  return section;
}

function createMoreCurrentForecastDetails() {
  const section = document.createElement('section');
  section.id = 'more-current-forecast-details';

  const div = document.createElement('div');

  const corDiv = document.createElement('div');

  const corIconDiv = document.createElement('div');
  const corImg = document.createElement('img');
  corImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corImg);

  const corPercentDiv = document.createElement('div');
  const corPercent = document.createElement('p');
}

export default function createPage() {
  const body = document.getElementsByTagName('body')[0];
  const navigationMenu = createNavigationMenu();
  const currentForecast = createCurrentForecast();

  body.appendChild(navigationMenu);
  body.appendChild(currentForecast);
}
