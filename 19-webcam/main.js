const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      console.log('it ran');
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream); // converted to url
      video.play();
    })
    .catch(err => {
      console.error('Oh no', err);
    })
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  console.log(width, height);

  // take image from video to canvas.
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height) // paint to the canvas
    // Take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // Mess with them
    pixels = redEffect(pixels);
    // Put them back
    ctx.putImageDate(pixels, 0, 0)
    ctx.globalAlpha = 0.1; // ghosting and stuff
  }, 16)
}

function redEffect(pixels) {
  // pixels isn't a normal array and doesn't have all the methods
  for(let i = 0; i < pixels.data.length; i += 4) {
    pixels[i] // r
    pixels[i + 1] // g
    pixels[i + 2] // b
  }
  return pixels;
}

function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i += 4) {
    pixels[i] // r
    pixels[i + 1] // g
    pixels[i + 2] // b
  }
  return pixels;
}

function takePhoto() {
  // Play the audio
  snap.currentTime = 0;
  snap.play();

  // take data out of canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data; // data of the base64
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt ="man" />`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();
video.addEventListener('canplay', paintToCanvas); // Once video is played emit the event 