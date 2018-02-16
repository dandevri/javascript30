# Unreal webcam fun
* One the video is in a canvas element you can do lots of stuff with it
* Must be a secure origin. https or localhost

* Pipe the video from the webcam into the video element and dump it into the canvas.
* Blob is raw data coming in from the webcam that's piped into the video element.
* Canvas needs to be the same size as the video.
* base 64 is text representation of the image 

* filters work; get the pixels out of the canvas and put them back in