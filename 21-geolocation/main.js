const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

//Listen for users position - watch it over time
navigator.geolocation.watchPosition((data) => {
  // success callback
  speed.textContent = data.cooords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.error(err);
  alert('You gotta allow that!')
});