let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')


function timer(seconds) {
  // clear timers
  clearInterval(countdown);
  const now = Date.now() // new date method
  const then = now + seconds * 1000; // add the elapsed seconds
  displayTimeLeft(seconds); // run it immediately
  displayEndTime(then);
  // does not run immediately
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check stop
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return
    }
    // Display it
    displayTimeLeft(secondsLeft);
  }, 1000) 
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours(); 
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hours} : ${minutes < 10 ? '0': ''}${minutes}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
})