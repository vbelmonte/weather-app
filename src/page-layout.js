import createCurrentForecast, { updateCurrentForecastLayout } from './current-forecast-layout';
import createMoreCurrentForecastDetails, { updateAdditionalCurrentForecastLayout } from './additional-current-forecast-layout';
import createAdditionalForecast, { update3DayForecastLayout, updateHourlyForecastLayout } from './additional-forecast-layout';
import checkQuery from './fetch-cities';
import fetchWeather, { fetchDefaultWeather } from './fetch-weather';

function clearTips() {
  const tipsContainer = document.getElementsByClassName('tips-container')[0];
  tipsContainer.innerHTML = '';
}

function createCityResultText(result) {
  if (result.zip === undefined) {
    const cityName = result.name;
    const { state } = result;
    const { country } = result;

    return `${cityName}, ${state}, ${country}`;
  }
  const { zip } = result;
  const cityName = result.name;
  const { country } = result;

  return `${zip}, ${cityName}, ${country}`;
}

function createQueryResult(searchResult) {
  const locationIcon = document.createElement('div');
  const icon = document.createElement('img');
  icon.src = '../src/assets/images/layout/location-marker.svg';
  locationIcon.appendChild(icon);

  const textResult = document.createElement('div');
  textResult.textContent = createCityResultText(searchResult);

  const result = document.createElement('div');
  result.classList.add('search-result');

  result.append(locationIcon, textResult);

  return result;
}

function createTip(text) {
  const tipImgDiv = document.createElement('div');
  tipImgDiv.classList.add('tip-img');
  const tipImg = document.createElement('img');
  tipImg.src = '../src/assets/images/layout/tip.svg';
  tipImgDiv.appendChild(tipImg);

  const tipDiv = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML = `${text}`;
  tipDiv.appendChild(p);

  const tip = document.createElement('div');
  tip.classList.add('tip');
  tip.append(tipImgDiv, tipDiv);

  return tip;
}

function displaySearchError(input) {
  console.log(`${input}`);

  const resultsContainer = document.getElementsByClassName('results-container')[0];
  const messageDiv = document.createElement('div');
  const message = document.createElement('h2');
  message.classList.add('bold', 'medium');
  message.textContent = `${input}`;
  messageDiv.appendChild(message);

  resultsContainer.appendChild(messageDiv);
}

function createRefineSuggestions() {
  const headline = document.createElement('h3');
  headline.classList.add('bold', 'small');
  headline.textContent = 'Try the following tips for more accurate results:';

  const textOne = 'Enter city and country code (eg. Essex, GB)';
  const tipOne = createTip(textOne);

  const textTwo = 'For US cities, enter city name, state, and country code (eg. Essex, MA, US)';
  const tipTwo = createTip(textTwo);

  const tipsContainer = document.getElementsByClassName('tips-container')[0];
  tipsContainer.append(headline, tipOne, tipTwo);
}

function createSearchSuggestions() {
  const headline = document.createElement('h3');
  headline.classList.add('bold', 'small');
  headline.textContent = 'Try the following tips to refine your search:';

  const textOne = 'Ensure the spelling of your search query is correct';
  const tipOne = createTip(textOne);

  const textTwo = 'For cities in the US, enter city followed by state and country code (eg. Los Angeles, CA, US)';
  const tipTwo = createTip(textTwo);

  const textThree = 'For cities outside the US, enter city followed by country code (eg. London, GB)';
  const tipThree = createTip(textThree);

  const textFour = 'To search by postal/zip code, enter postal/zip code followed by country code (eg. 33701, US)';
  const tipFour = createTip(textFour);

  const tipsContainer = document.getElementsByClassName('tips-container')[0];
  tipsContainer.append(headline, tipOne, tipTwo, tipThree, tipFour);
}

function createSearchInstructions() {
  const textOne = 'To search for city in the US, enter city, state, and country code (eg. Phoenix, AZ, US)';
  const tipOne = createTip(textOne);

  const textTwo = 'To search for city outside US, enter city and country code (eg. London, GB)';
  const tipTwo = createTip(textTwo);

  const textThree = 'You can also search by postal/zip code followed by country code (eg. 33701, US)';
  const tipThree = createTip(textThree);

  const textFour = 'Use <a href=\'https://www.iso.org/obp/ui/#search\' target=\'_blank\'>ISO 3166 country codes</a> when searching by country';
  const tipFour = createTip(textFour);

  const instructions = document.createElement('div');
  instructions.classList.add('tips-container');
  instructions.append(tipOne, tipTwo, tipThree, tipFour);

  return instructions;
}

function toggleSearchModal() {
  const mobileSearchModal = document.getElementsByClassName('mobile-search-modal')[0];
  if (mobileSearchModal.classList.contains('hidden')) {
    mobileSearchModal.classList.remove('hidden');
    const outputContainer = document.getElementsByClassName('tips-container')[0];
    outputContainer.appendChild(createSearchInstructions());
  } else {
    const searchInput = document.getElementById('city-mobile');
    searchInput.value = '';
    const resultsContainer = document.getElementsByClassName('results-container')[0];
    resultsContainer.innerHTML = '';
    clearTips();
    mobileSearchModal.classList.add('hidden');
  }
}

function clearResults() {
  const resultsContainer = document.getElementsByClassName('results-container')[0];
  resultsContainer.innerHTML = '';
}

function displaySearchResults(results) {
  const resultsContainer = document.getElementsByClassName('results-container')[0];

  if (Array.isArray(results)) {
    for (let i = 0; i < results.length; i += 1) {
      const query = results[i];
      const queryResult = createQueryResult(query);
      queryResult.addEventListener('click', async () => {
        toggleSearchModal();
        // call the fetch weather function
        console.log('fetching weather!');
        const result = await fetchWeather(query);
        console.log(result);
        updateCurrentForecastLayout(result);
        updateAdditionalCurrentForecastLayout(result);
        updateHourlyForecastLayout(result);
        update3DayForecastLayout(result);
      });

      resultsContainer.appendChild(queryResult);
    }
  } else {
    const queryResult = createQueryResult(results);
    queryResult.addEventListener('click', async () => {
      toggleSearchModal();
      console.log('fetching weather!');
      const result = await fetchWeather(results);
      console.log(result);
      updateCurrentForecastLayout(result);
      updateAdditionalCurrentForecastLayout(result);
      updateHourlyForecastLayout(result);
      update3DayForecastLayout(result);
    });

    resultsContainer.appendChild(queryResult);
  }
}

function createCityInputFormMobile() {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('mobile-search');
  const form = document.createElement('form');

  const label = document.createElement('label');
  label.for = 'city-mobile';

  const input = document.createElement('input');
  input.id = 'city-mobile';
  input.type = 'text';
  input.placeholder = 'Search city';
  label.appendChild(input);

  form.appendChild(label);
  inputContainer.appendChild(form);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearResults();
    const result = await checkQuery(input.value);
    if (result instanceof Object) {
      clearTips();
      displaySearchResults(result);
      createRefineSuggestions();
    } else {
      clearTips();
      displaySearchError(result);
      createSearchSuggestions();
    }
  });

  return inputContainer;
}

function createToggleSwitch(toggleName) {
  const label = document.createElement('label');
  label.classList.add('switch');
  label.for = toggleName;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = toggleName;

  const span = document.createElement('span');
  span.classList.add('slider', 'round');

  label.append(input, span);

  return label;
}

function createNavigationMenu() {
  const nav = document.createElement('nav');
  nav.classList.add('main-nav');
  const searchImg = document.createElement('img');
  searchImg.src = '../src/assets/images/layout/magnifying-glass-solid.svg';

  const logoDiv = document.createElement('div');
  const logoImg = document.createElement('img');
  logoImg.classList.add('logo');
  logoImg.src = '../src/assets/images/layout/weather-app-logo.svg';
  logoDiv.appendChild(logoImg);

  const searchDiv = document.createElement('div');
  const searchContainerDiv = document.createElement('div');
  searchContainerDiv.classList.add('search-container');

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search-city';
  searchInput.placeholder = 'Enter city (eg. Los Angeles)';

  searchContainerDiv.append(searchImg, searchInput);
  searchDiv.appendChild(searchContainerDiv);

  const hamburgerMenuButton = document.createElement('button');
  hamburgerMenuButton.classList.add('menu-button');
  const hamburgerMenuImg = document.createElement('img');
  hamburgerMenuImg.classList.add('menu');
  hamburgerMenuImg.src = '../src/assets/images/layout/hamburger-menu-svgrepo-com.svg';
  hamburgerMenuButton.appendChild(hamburgerMenuImg);

  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');
  searchButton.appendChild(searchImg);

  searchButton.addEventListener('click', toggleSearchModal);

  const darkLightModeSwitchDiv = document.createElement('div');
  darkLightModeSwitchDiv.classList.add('toggle-div', 'hidden');
  darkLightModeSwitchDiv.id = 'hidden';

  const darkLightModeSwitchP = document.createElement('p');
  darkLightModeSwitchP.classList.add('dark-light-switch', 'small');
  darkLightModeSwitchP.textContent = 'Enable Dark Mode';

  const darkLightModeSwitch = createToggleSwitch();
  darkLightModeSwitch.id = 'dark-light-switch';

  darkLightModeSwitchDiv.append(darkLightModeSwitchP, darkLightModeSwitch);

  const farenheitCelsiusSwitchDiv = document.createElement('div');
  farenheitCelsiusSwitchDiv.classList.add('toggle-div');

  const farenheitCelsiusSwitchP = document.createElement('p');
  farenheitCelsiusSwitchP.classList.add('farenheit-celsius-switch', 'small');
  farenheitCelsiusSwitchP.textContent = 'Enable Celsius';

  const farenheitCelsiusSwitch = createToggleSwitch();
  farenheitCelsiusSwitch.id = 'farenheit-celsius-switch';

  farenheitCelsiusSwitchDiv.append(farenheitCelsiusSwitchP, farenheitCelsiusSwitch);

  const switchesDiv = document.createElement('div');
  switchesDiv.classList.add('switches');
  switchesDiv.append(darkLightModeSwitchDiv, farenheitCelsiusSwitchDiv);

  const additionalOptionsDiv = document.createElement('div');
  additionalOptionsDiv.classList.add('additional-options');
  additionalOptionsDiv.append(searchButton, hamburgerMenuButton);

  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  optionsDiv.append(switchesDiv, additionalOptionsDiv);

  nav.append(logoDiv, optionsDiv);

  return nav;
}

function createSideNavigation() {
  const sideNavContainer = document.createElement('nav');
  sideNavContainer.classList.add('side-nav-container', 'hidden');

  const sideNav = document.createElement('div');
  sideNav.classList.add('side-nav');

  const logoDiv = document.createElement('div');
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = '../src/assets/images/layout/weather-app-logo.svg';
  logoDiv.appendChild(logo);
  sideNav.appendChild(logoDiv);

  const navItems = document.createElement('div');
  const topList = document.createElement('ul');

  const darkMode = document.createElement('li');
  darkMode.textContent = 'Dark Mode';

  const setToCelsius = document.createElement('li');
  setToCelsius.textContent = 'Set to Celsius';

  topList.append(darkMode, setToCelsius);

  const divider = document.createElement('hr');
  navItems.append(topList, divider);

  const bottomList = document.createElement('ul');

  const about = document.createElement('li');
  about.textContent = 'About';
  bottomList.appendChild(about);
  navItems.appendChild(bottomList);

  sideNav.appendChild(navItems);
  sideNavContainer.appendChild(sideNav);

  const exitDiv = document.createElement('div');
  exitDiv.classList.add('exit');

  const exitBtn = document.createElement('button');
  const exitImg = document.createElement('img');
  exitImg.src = '../src/assets/images/layout/exit.svg';
  exitBtn.appendChild(exitImg);
  exitDiv.appendChild(exitBtn);

  sideNavContainer.appendChild(exitDiv);

  return sideNavContainer;
}

function createMobileSearchModal() {
  const modal = document.createElement('div');
  modal.classList.add('mobile-search-modal', 'hidden');

  const container = document.createElement('div');
  container.classList.add('container');

  const cityInputForm = createCityInputFormMobile();

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('button', 'primary');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', toggleSearchModal);

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-bar');
  searchContainer.append(cityInputForm, cancelButton);

  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results-container');

  const tipsContainer = document.createElement('div');
  tipsContainer.classList.add('tips-container');

  const outputContainer = document.createElement('div');
  outputContainer.classList.add('output-container');
  outputContainer.append(resultsContainer, tipsContainer);

  container.append(searchContainer, outputContainer);
  modal.append(container);

  return modal;
}

async function loadDefaultWeather() {
  const result = await fetchDefaultWeather();
  updateCurrentForecastLayout(result);
  updateAdditionalCurrentForecastLayout(result);
  updateHourlyForecastLayout(result);
  update3DayForecastLayout(result);
}

export default async function createPage() {
  const body = document.getElementsByTagName('body')[0];
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  const navigationMenu = createNavigationMenu();
  const sideNavigation = createSideNavigation();
  const searchMobile = createMobileSearchModal();
  const currentForecast = createCurrentForecast();
  const moreCurrentForecastDetails = createMoreCurrentForecastDetails();
  const additionalForecastDetails = createAdditionalForecast();

  body.append(navigationMenu, sideNavigation, searchMobile);
  gridContainer.append(currentForecast, moreCurrentForecastDetails, additionalForecastDetails);
  mainContainer.appendChild(gridContainer);

  body.appendChild(mainContainer);
  await loadDefaultWeather();
}
