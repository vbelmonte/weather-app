function createHourlyCard() {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('hourly-card');

  const time = document.createElement('h4');
  time.classList.add('secondary');
  time.textContent = '2pm';

  const forecastIcon = document.createElement('img');
  forecastIcon.classList.add('tertiary');
  forecastIcon.src = '../src/assets/images/forecast-details/weather-partly-cloudy-day-svgrepo-com.svg';

  const hourlyTemp = document.createElement('p');
  hourlyTemp.textContent = '78°';

  cardDiv.appendChild(time);
  cardDiv.appendChild(forecastIcon);
  cardDiv.appendChild(hourlyTemp);

  return cardDiv;
}

function createHourlyForecast() {
  const hourlyForecast = document.createElement('div');
  hourlyForecast.classList.add('hourly-forecast');

  const hourlyForecastTitleDiv = document.createElement('div');
  const hourlyForecastTitle = document.createElement('h3');
  hourlyForecastTitle.classList.add('bold');
  hourlyForecastTitle.textContent = 'Hourly Forecast';
  hourlyForecastTitleDiv.appendChild(hourlyForecastTitle);

  const hourlyForecastCarousel = document.createElement('div');
  hourlyForecastCarousel.classList.add('hourly-forecast-carousel');
  hourlyForecastCarousel.classList.add('no-scrollbar');

  const hourlyForecastContainer = document.createElement('div');
  hourlyForecastContainer.classList.add('container');

  for (let i = 0; i < 7; i += 1) {
    const hourlyCard = createHourlyCard();
    hourlyForecastContainer.appendChild(hourlyCard);
  }

  hourlyForecastCarousel.appendChild(hourlyForecastContainer);

  hourlyForecast.appendChild(hourlyForecastTitleDiv);
  hourlyForecast.appendChild(hourlyForecastCarousel);

  return hourlyForecast;
}

function createDailyForecastBar() {
  const forecastBar = document.createElement('div');
  forecastBar.classList.add('daily-bar');

  const dayDiv = document.createElement('div');
  const day = document.createElement('h4');
  day.classList.add('day');
  day.classList.add('secondary');
  day.textContent = 'Wed';
  dayDiv.appendChild(day);
  forecastBar.appendChild(dayDiv);

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');

  const forecastDiv = document.createElement('div');
  forecastDiv.classList.add('forecast');

  const weatherIconDiv = document.createElement('div');
  const iconImg = document.createElement('img');
  iconImg.classList.add('icon');
  iconImg.classList.add('tertiary');
  iconImg.src = '../src/assets/images/forecast-details/sun-outline-svgrepo-com.svg';
  weatherIconDiv.appendChild(iconImg);
  forecastDiv.appendChild(weatherIconDiv);

  const descriptionDiv = document.createElement('div');
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Sunny and clear';
  descriptionDiv.appendChild(description);
  forecastDiv.appendChild(descriptionDiv);

  detailsDiv.appendChild(forecastDiv);

  const temperaturesDiv = document.createElement('div');
  temperaturesDiv.classList.add('temperatures');
  const highP = document.createElement('p');
  highP.classList.add('high');
  highP.textContent = '80°';
  const lowP = document.createElement('p');
  lowP.classList.add('low');
  lowP.textContent = '62°';
  temperaturesDiv.appendChild(highP);
  temperaturesDiv.appendChild(lowP);
  detailsDiv.appendChild(temperaturesDiv);

  const corDiv = document.createElement('div');
  corDiv.classList.add('chance-of-rain');
  const corIconDiv = document.createElement('div');
  const corIconImg = document.createElement('img');
  corIconImg.classList.add('icon');
  corIconImg.classList.add('tertiary');
  corIconImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corIconImg);
  corDiv.appendChild(corIconDiv);
  const percentageDiv = document.createElement('div');
  const percentage = document.createElement('p');
  percentage.classList.add('percentage');
  percentage.textContent = '0%';
  percentageDiv.appendChild(percentage);
  corDiv.appendChild(percentageDiv);
  detailsDiv.appendChild(corDiv);

  forecastBar.appendChild(detailsDiv);

  return forecastBar;
}

function create3DayForecast() {
  const threeDayForecast = document.createElement('div');
  threeDayForecast.classList.add('3-day-forecast');

  const threeDayForecastTitleDiv = document.createElement('div');
  const threeDayForecastTitle = document.createElement('h3');
  threeDayForecastTitle.classList.add('bold');
  threeDayForecastTitle.textContent = '3-Day Forecast';
  threeDayForecastTitleDiv.appendChild(threeDayForecastTitle);
  threeDayForecast.appendChild(threeDayForecastTitleDiv);

  const threeDayForecastList = document.createElement('div');
  threeDayForecastList.classList.add('3-day-forecast-list');

  const dayOne = createDailyForecastBar();
  const dayTwo = createDailyForecastBar();
  const dayThree = createDailyForecastBar();

  threeDayForecastList.appendChild(dayOne);
  threeDayForecastList.appendChild(dayTwo);
  threeDayForecastList.appendChild(dayThree);

  threeDayForecast.appendChild(threeDayForecastList);

  return threeDayForecast;
}

export default function createAdditionalForecast() {
  const section = document.createElement('section');
  section.id = 'additional-forecast';

  const hourlyForecast = createHourlyForecast();
  section.appendChild(hourlyForecast);

  const threeDayForecast = create3DayForecast();
  section.appendChild(threeDayForecast);

  return section;
}
