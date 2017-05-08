let cardElm = document.querySelector('.card');

// let count = 0;
// setInterval(() => {
//   cardElm.style.backgroundPosition = `0 ${count * 30}px`;
//   count++;
// }, 100);

cardElm.addEventListener('mousemove', (evt) => {
  let delta = Math.floor((evt.pageY - 120) / 10);

  if (delta == null) {
  } else if (delta > 5) {
    delta = 5;
  } else if (delta < -5) {
    delta = -5;
  }

  cardElm.style.backgroundPosition = `0 ${delta * 30}px`;
});
