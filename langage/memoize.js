const mem = require('mem');

const names = [
  { prenom: 'Jean', nom: 'Dupont'},
  { prenom: 'Eric', nom: 'Martin'},
  { prenom: 'Romain', nom: 'Bohdanowicz'},
];

function findPrenom(prenom, array) {
  console.log('findPrenom');
  return array.find((el) => el.prenom === prenom);
}

const memoized = mem(findPrenom);

console.log(memoized('Romain', names)); // appel à findPrenom
console.log(memoized('Romain', names)); // pas d'appel à findPrenom car les params sont les mêmes
console.log(memoized('Romain', names)); // pas d'appel à findPrenom car les params sont les mêmes
console.log(memoized('Eric', names)); // appel à findPrenom car les params sont différents