const timesNodes = [...document.querySelectorAll('[data-time]')];
const seconds = timesNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat); // Call function for every item in the array
    return (mins * 60) + secs;
  })
  .reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
// Calculate the seconds left from hours
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
// Calculate the minutes left from mins
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);