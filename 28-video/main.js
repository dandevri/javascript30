const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - this.offsetTop; // pixel height of the bar
  const percent = y / this.offsetHeight; // percentage off the bar
  const min = 0.4; // min playback
  const max = 4; // max playback
  const height = Math.round((percent * 100)) + '%'; // height in percentage
  const playbackRate = percent * (max - min) + min // playbackrate from percent
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
})