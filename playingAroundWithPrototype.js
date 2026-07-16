// console.log(`Hello world!`);
// let person = {};
// person.name = "jasim";
// person.age = 35;

// person.eat = function () {
//   console.log("Person is eating rice");
// };

// person.sleep = function () {
//   console.log("Person is sleeping");
// };

// let p = function Person(name, age) {
//   let person = {};
//
//   person.name = name;
//   person.age = age;
//   person.eat = function () {
// console.log("Person is eating rice");
//   };
//   person.sleep = function () {
// console.log("Person is sleeping");
//   };
//
//   return person;
// };
//
// console.dir(p); // this is creating a person

// function Person(name, age) {
//   let person = {};

//   person.name = name;
//   person.age = age;
//   person.eat = function () {
//     console.log("Person is eating rice");
//   };
//   person.sleep = function () {
//     console.log("Person is sleeping");
//   };

//   return person;
// }
// const sakib = Person("Sakib", 36);
// const tamim = Person("Tamim", 36);

// problem hocche ;arger applications er khetre, jokgon larger application hobe then if each jad all these methods it might slow the application down
// in this case we are going to be [putting] these common methoods outside of the scope and then
// give them only to objects that are going to be needing htese objects

// const personMethods = {
//   eat() {
//     console.log("Person is eating rice");
//   },
//   sleep() {
//     console.log("Person is sleeping");
//   },
// };

// function Person(name, age) {
//   let person = {};

//   person.name = name;
//   person.age = age;

//   person.eat = personMethods.eat;
//   person.sleep = personMethods.sleep;

//   return person;
// }
// const sakib = Person("Sakib", 36);
// const tamim = Person("Tamim", 36);

// this is creating hte same problem, when we want to create multiple diferent objects
// we have no way of smarly handling the methids for each object bu references

// const captain = {
//   name: "Mashrafi",
//   age: 36,
//   country: "Bangladesh",
// };

// const player = Object.create(captain);
// // console.log(player); // this gives us a blank object
// console.log(player.name); // this gives us Mashrafi whereas the object itself is giving blank
// // this occurs because if prototypung

// const personMethods = {
//   eat() {
//     console.log("Person is eating rice");
//   },
//   sleep() {
//     console.log("Person is sleeping");
//   },
//   play() {
//     console.log(`Person is playing !1`);
//   },
// };

// function Person(name, age) {
//   let person = Object.create(personMethods);
//   person.name = name;
//   person.age = age;

//   return person;
// }
// const sakib = Person("Sakib", 36);
// sakib.eat();
// const tamim = Person("Tamim", 36);

// parent er theke kichu common properties dei amra child e, child er kase nijer o kisu kisu property nije add kore nite pare
// OOP
// bit for now we are needing assistance from an object outside of the parent object to set these propertues

// function test() {}

// console.log(test.prototype);
// console.dir(test);

// therefore it is a property of javaScript function that points to an object

// const personMethods =

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    console.log("Person is eating rice");
  },
  sleep() {
    console.log("Person is sleeping");
  },
  play() {
    console.log(`Person is playing bullshit`);
  },
};
const sakib = Person("Sakib", 36);
sakib.eat();
const tamim = Person("Tamim", 36);
tamim.play();

// to amra ki janlam ekhon. Amra object.create diye jeikono parent er prperties child e rakhte pari and oiota parents access korte pare
// jei jinish gula share korbo oigula amader aladaekta method nite hoisilo
// therefore instead of using a different object to define the parent object we can
// therefore prototype k bebohar kore

//Prototype hocche function er builtin property jeita Js amaderk dei
//and oitar moddhe ja share kore proyojon jeita commoin sheita amra rekhe dite pari

function PersonWithNew(name, age) {
  // let person = Object.create(Person.prototype);
  this.name = name;
  this.age = age;
  this.vatij = "vatijar Naam";

  // return person;
}
// console.log(`hi`);
console.log("");
console.log("");

PersonWithNew.prototype = {
  eat() {
    console.log(`${this.name} is eating rice`);
    // console.log(this); //** This is a very important line   */
    // console.log(hi);
  },
  sleep() {
    console.log("Person is sleeping");
  },
  play() {
    console.log(`Person is playing bullshit`);
  },
};

const sakib1 = new PersonWithNew("Sakib", 36);
const tamim2 = new PersonWithNew("Tamim", 36);
sakib1.eat();

console.log("");
console.log("");

class PersonCreatedWithClass {
  constructor(name, age) {
    ((this.name = name), (this.age = age));
  }
  eat() {
    console.log(`${this.name} is eating rice`);
  }

  sleep() {
    console.log(`${this.name} who is ${this.age} years old is sleeping`);
  }

  play() {
    console.log(`${this.name}, o lila khela kortese`);
  }
}

const sakibWithClass = new PersonCreatedWithClass("sakib", 35);
const tamimWithClass = new PersonCreatedWithClass("tamim", 27);

sakibWithClass.eat();
tamimWithClass.sleep();

let peoplePersons = new Array();

console.log(Array.prototype);
