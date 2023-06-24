import createCurrentForecast from './current-forecast-layout';
import createMoreCurrentForecastDetails from './additional-current-forecast-layout';
import createAdditionalForecast from './additional-forecast-layout';

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

  searchContainerDiv.appendChild(searchImg);
  searchContainerDiv.appendChild(searchInput);
  searchDiv.appendChild(searchContainerDiv);

  const hamburgerMenuLink = document.createElement('a');
  const hamburgerMenuImg = document.createElement('img');
  hamburgerMenuImg.classList.add('menu');
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

function createSideNavigation() {
  const sideNavContainer = document.createElement('nav');
  sideNavContainer.classList.add('side-nav-container');
  sideNavContainer.classList.add('hidden');

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
  topList.appendChild(darkMode);

  const setToCelsius = document.createElement('li');
  setToCelsius.textContent = 'Set to Celsius';
  topList.appendChild(setToCelsius);
  navItems.appendChild(topList);

  const divider = document.createElement('hr');
  navItems.appendChild(divider);

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

export default function createPage() {
  const body = document.getElementsByTagName('body')[0];
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  const navigationMenu = createNavigationMenu();
  const sideNavigation = createSideNavigation();
  const currentForecast = createCurrentForecast();
  const moreCurrentForecastDetails = createMoreCurrentForecastDetails();
  const additionalForecastDetails = createAdditionalForecast();

  body.appendChild(navigationMenu);
  body.appendChild(sideNavigation);
  gridContainer.appendChild(currentForecast);
  gridContainer.appendChild(moreCurrentForecastDetails);
  gridContainer.appendChild(additionalForecastDetails);
  mainContainer.appendChild(gridContainer);

  body.appendChild(mainContainer);
}
