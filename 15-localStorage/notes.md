# LocalStorage and Event Delegation

* Persisting state with localStorage
* Event Delegation; if you add an eventlistener to something that doesn't exist, in the future it won't be clicked.

* Always listen to the submit event (not for click on button)
* Prevent the form from submitting to e.g. a database
* You can use `this` if you have multiple forms, you can scope it and narrow it down

* It now renders the whole list but you maybe want to render only a specific list item. 
* ID and for are the same thing

* Store data with localStorage.
* You have an object in the browser; only computer and browser based.
* The localStorage object has items as key
* localStorage isn't actually an object. Only key value store. It only accepts strings.
* The browser converts it to a string. That's not what we want; we need to stringify.
* JSON parse takes it from a string and converts it back into objects

* The state is no longer handled
* Because the inputs are listened after we created them, they don't have listener on them
* Event delegation; somebody on the page in the time of listening
* He parent; can you pass the event onto them?