const clockContainer = document.querySelector('.header_time_wrapper');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}
init();
