const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(number) {
  const image = new Image();
  image.src = `image/${number + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randNumber = getRandom();
  paintImage(randNumber);
}

init();
