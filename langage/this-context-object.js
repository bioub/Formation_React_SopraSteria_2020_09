// 'use strict'; // ES5

global.name = 'Toto';

const contact = {
  name: 'Romain',
  hello() {
    console.log('Hello ' + this.name);
  }
};

function hello() {
  // console.log(this); 
  // objet global (window dans un navigateur, global dans Node.js)
  // ou undefined en mode strict (ES5)
  console.log('Hello ' + this.name);
}

contact.hello();

hello();
hello.call(contact)
const helloContact = hello.bind(contact); // ES5
helloContact();

class Contact {
  name = 'Romain';
  hello() {
    setTimeout(() => {
      console.log('Hello ' + this.name);
    }, 100);
  }
}

const romain = new Contact();
romain.hello();