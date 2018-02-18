# Event Capture
* bubbling; browser will figure out what you clicked on. It will also register clicks up
* listening on a click of multiple nested elements 

* browser will do a capture; from top down. Captures all of them events.
* Then it will bubble up; trigger the events when you go up.

* stop propagation; stop bubbling up. You can have both capture true or false
* once option; it will unbind itself
