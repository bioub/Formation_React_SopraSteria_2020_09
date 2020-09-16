// ES2015
class Contact {
  constructor() {
    this.name = "Romain";
    this.hello = function () {
      console.log("Hello (object) " + this.name);
    };
  }
  hello() {
    console.log("Hello (prototype) " + this.name);
  }
}

// function Contact() {
//   this.name = 'Romain';
//   this.hello = function() {
//     console.log('Hello (object) ' + this.name);
//   };
// }

// Contact.prototype.hello = function() {
//   console.log('Hello (prototype) ' + this.name);
// };

const contact = new Contact();

console.log(typeof Contact); // function
console.log(typeof contact); // object

console.log(contact.name); // Romain
contact.hello(); // Hello Romain
Contact.prototype.hello.call(contact);

const contact2 = new Contact();
