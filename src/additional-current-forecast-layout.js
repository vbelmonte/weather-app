function printOutHumidity(query) {
  return `${query.currentWeather.humidity}%`;
}

function printOutWindSpeed(query) {
  return `${Math.floor(query.currentWeather.wind)}mph`;
}

function printOutUVIndex(query) {
  const uv = query.daily.uv_index_max[0];
  const result = Math.floor(uv);

  return `${result} of 10`;
}

function printOutChanceOfRain(query) {
  return `${query.currentWeather.precipitation}%`;
}

export function updateAdditionalCurrentForecastLayout(query) {
  const cor = document.getElementById('chance-of-rain');
  cor.textContent = printOutChanceOfRain(query);

  const humidity = document.getElementById('humidity');
  humidity.textContent = printOutHumidity(query);

  const windSpeed = document.getElementById('wind');
  windSpeed.textContent = printOutWindSpeed(query);

  const uv = document.getElementById('uv-index');
  uv.textContent = printOutUVIndex(query);
}

function createChanceOfRain() {
  const corDiv = document.createElement('div');
  corDiv.classList.add('cor', 'module');

  const corIconDiv = document.createElement('div');
  const corImg = document.createElement('img');
  corImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corImg);
  corDiv.appendChild(corIconDiv);

  const corPercentDiv = document.createElement('div');
  const corPercent = document.createElement('p');
  corPercent.id = 'chance-of-rain';
  corPercentDiv.appendChild(corPercent);

  const corTitleDiv = document.createElement('div');
  const corTitle = document.createElement('h5');
  corTitle.classList.add('secondary', 'small');
  corTitle.textContent = 'Rain';
  corTitleDiv.appendChild(corTitle);

  corDiv.append(corPercentDiv, corTitleDiv);

  return corDiv;
}

function createHumidity() {
  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('humidity', 'module');

  const humidityIconDiv = document.createElement('div');
  const humidityImg = document.createElement('img');
  humidityImg.src = '../src/assets/images/forecast-details/waves-fill-svgrepo-com.svg';
  humidityIconDiv.appendChild(humidityImg);
  humidityDiv.appendChild(humidityIconDiv);

  const humidityPercentDiv = document.createElement('div');
  const humidityPercent = document.createElement('p');
  humidityPercent.id = 'humidity';
  humidityPercentDiv.appendChild(humidityPercent);

  const humidityTitleDiv = document.createElement('div');
  const humidityTitle = document.createElement('h5');
  humidityTitle.classList.add('secondary', 'small');
  humidityTitle.textContent = 'Humidity';
  humidityTitleDiv.appendChild(humidityTitle);

  humidityDiv.append(humidityPercentDiv, humidityTitleDiv);

  return humidityDiv;
}

function createWind() {
  const windDiv = document.createElement('div');
  windDiv.classList.add('wind', 'module');

  const windIconDiv = document.createElement('div');
  const windImg = document.createElement('img');
  windImg.src = '../src/assets/images/forecast-details/wind-fill-svgrepo-com.svg';
  windIconDiv.appendChild(windImg);
  windDiv.appendChild(windIconDiv);

  const windSpeedDiv = document.createElement('div');
  const windSpeed = document.createElement('p');
  windSpeed.id = 'wind';
  windSpeedDiv.appendChild(windSpeed);

  const windTitleDiv = document.createElement('div');
  const windTitle = document.createElement('h5');
  windTitle.classList.add('secondary', 'small');
  windTitle.textContent = 'Wind';
  windTitleDiv.appendChild(windTitle);

  windDiv.append(windSpeedDiv, windTitleDiv);

  return windDiv;
}

function createUV() {
  const uvDiv = document.createElement('div');
  uvDiv.classList.add('uv', 'module');

  const uvIconDiv = document.createElement('div');
  const uvImg = document.createElement('img');
  uvImg.src = '../src/assets/images/forecast-details/sun-filled-svgrepo-com.svg';
  uvIconDiv.appendChild(uvImg);
  uvDiv.appendChild(uvIconDiv);

  const uvIndexDiv = document.createElement('div');
  const uvIndex = document.createElement('p');
  uvIndex.id = 'uv-index';
  uvIndexDiv.appendChild(uvIndex);

  const uvTitleDiv = document.createElement('div');
  const uvTitle = document.createElement('h5');
  uvTitle.classList.add('secondary', 'small');
  uvTitle.textContent = 'UV Index';
  uvTitleDiv.appendChild(uvTitle);

  uvDiv.append(uvIndexDiv, uvTitleDiv);

  return uvDiv;
}

export default function createMoreCurrentForecastDetails() {
  const section = document.createElement('section');
  section.id = 'more-current-forecast-details';

  const moreForecastDetailsDiv = document.createElement('div');
  moreForecastDetailsDiv.id = 'more-current-forecast-details-container';

  const chanceOfRain = createChanceOfRain();
  const humidity = createHumidity();
  const wind = createWind();
  const uv = createUV();

  moreForecastDetailsDiv.append(chanceOfRain, humidity, wind, uv);

  section.appendChild(moreForecastDetailsDiv);

  return section;
}
