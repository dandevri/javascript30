let age = 100;
let age2 = age;
console.log(age, age2);
age2 = 200;
console.log(age, age2);

let name = 'Dan';
let name2 = name;
console.log(name, name2);
name = 'Peter'
console.log(name, name2);

const players = ['Peter', 'Pieter', 'Peetje'];
const team = players;
console.log(players, team);
team[3] = 'Petra';

const team2 = players.slice();
const team3 = [].concat(players);

// Will take every item out iterable and put it into the containing array
const team4 = [...players];3

const person = {
  name: 'Danny',
  age: 20,
}

// const captain = person;
// captain.number = 99;

const captain = Object.assign({}, person, {number: 99});
console.log(captain);

const wes = {
  name: 'wes',
  age: 100,
  other: {
    twitter: '@wesbos',
    fb: 'stuff'
  }
}

console.clear();
console.log(wes);

const dev = Object.assign({}, wes)
dev.name = 'Wesley';