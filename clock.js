const clock = document.querySelector(".js-clock");

function getTime() {
  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();

  clock.innerHTML = `${currentHours < 10 ? `0${currentHours}` : currentHours}:${
    currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
  }:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;

  setInterval(getTime, 1000);
}
