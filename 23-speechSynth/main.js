const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value); // loop over all voices in array
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel(); // stop from speaking
  if(startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  // make sure the names in the html are the same as the api properties
  console.log(this.name, this.value)
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false)); // otherwise will run on page load
options.forEach(option => option.addEventListener('change', setOption))
