const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (inputValue) => {
    const timer = setInterval(() => {
      const seconds = Math.trunc(inputValue % 60);
      const minutes = Math.trunc(inputValue / 60 % 60);
      const hours = Math.trunc(inputValue / 60 / 60 % 60);

      const renderSeconds = (seconds < 10) ? `0${seconds}` : seconds;
      const renderMins = (minutes < 10) ? `0${minutes}` : minutes;
      const renderHours = (hours < 10) ? `0${hours}` : hours;

      if (inputValue === 0) {
        clearInterval(timer);
      }

      const strTimer = `${renderHours}:${renderMins}:${renderSeconds}`;
      timerEl.innerHTML = strTimer;

      --inputValue;
   }, 1000)}
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  const inputValue = Number(e.target.value);

  if (!inputValue) {
    inputEl.value = '';
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  if(!seconds) return

  animateTimer(seconds);

  inputEl.setAttribute('disabled', '')
  inputEl.value = '';
});
