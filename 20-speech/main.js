window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true; // not stop speaking 

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// it unbinds itself
recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    p.textContent = transcript;
    // Overwrite the paragraph
    if(e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
    if(transcript.includes('unicorn')) {
      console.log('🦄')
    }
  console.log(transcript);
})

recognition.addEventListener('end', recognition.start);
recognition.start() // not run on page load but start