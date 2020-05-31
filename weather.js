const weather = document.querySelector(".js-weather");

const API_KEY = "f2db0702aa2fa6ec45ca97038f9fc720";
const COORDS = "coords";
const STATE = "state";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.classList.add(STATE);
      weather.innerText = `${Math.round(temperature)}℃ \n ${place}`;
    });
}

function saveCoords(object) {
  localStorage.setItem(COORDS, JSON.stringify(object));
}

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coordsObj = {
    latitude: lat,
    longitude: lon,
  };
  saveCoords(coordsObj);
  getWeather(lat, lon);
}

function error() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(success, error);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
