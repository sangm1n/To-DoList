const firstPage = document.querySelector(".js-firstPage"),
  secondPage = document.querySelector(".js-secondPage"),
  name = firstPage.querySelector(".js-name"),
  greeting = document.querySelector(".js-greeting"),
  state = document.querySelector(".js-weather");

const USER_NAME = "currentUser",
  SHOWING_CN = "show",
  HIDING_CN = "hide";

const MORNING = "Good morning";
const AFTERNOON = "Good afternoon";
const EVENING = "Good evening";

const hour = new Date().getHours();

function saveName(text) {
  localStorage.setItem(USER_NAME, text);
}

function paintGreeting(text) {
  firstPage.classList.add(HIDING_CN);
  secondPage.classList.remove(HIDING_CN);
  secondPage.classList.add(SHOWING_CN);
  state.classList.remove(HIDING_CN);
  state.classList.add(SHOWING_CN);

  getTime();
  if (hour >= 6 && hour < 12) {
    greeting.innerHTML = `${MORNING}, ${text}`;
  } else if (hour >= 12 && hour < 20) {
    greeting.innerHTML = `${AFTERNOON}, ${text}`;
  } else {
    greeting.innerHTML = `${EVENING}, ${text}`;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = name.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askName() {
  firstPage.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_NAME);

  if (currentUser === null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
