# Reference VS copy
* Fundamental to understanding how JS works,
* And source for error

* It's not going to update the first declaration
* If you change the original one, it's not going to update

* Arrays; team is just a reference to the array so when you update array it's going back to the reference
* We need to make a copy not a reference
* If you don't pass arguments to slice it will make a copy

* The same thing happens for objects
* We will be getting an object spread

* It is very shallow, it will only go one level deep
* Object assign only one level deep, you need to clone it
* Very rarely you have to clone the object that deep