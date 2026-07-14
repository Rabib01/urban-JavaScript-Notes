"use strict";

const person = {
  name: "Rabib",

  sayName() {
    console.log(this.name);
  },
};

person.sayName();
console.log("");
console.log("");

const printName = function () {
  console.log(this.name);
};

const person1 = {
  name: "Rabib",
  printName,
};

const person2 = {
  name: "Rayen",
  printName,
};

person1.printName();
person2.printName();
console.log("");
console.log("");

const addGreeting = function (obj) {
  obj.greet = function () {
    console.log(`Hello ${this.name}`);
  };
};

const cat = {
  name: "Milo",
};

const dog = {
  name: "Buddy",
};

addGreeting(cat);
addGreeting(dog);

cat.greet();
dog.greet();

console.log("");
console.log("");

const student = {
  name: "Alice",

  info: function () {
    console.log(this.name);
  },
};

const teacher = {
  name: "Bob",

  info: student.info,
};

student.info();
teacher.info();
console.log("");
console.log("");

const person11 = {
  name: "Rabib",

  pet: {
    name: "Max",

    speak() {
      console.log(this.name);
    },
  },
};

person11.pet.speak();
console.log("");
console.log("");

const print = function () {
  console.log(this.name);
};

const rabbit = {
  name: "Rabbit",
  print,
};

const lion = {
  name: "Lion",
  print,
};

rabbit.print();
lion.print();
rabbit.print();
lion.print();
console.log("");
console.log("");

const addAgePrinter = function (obj) {
  obj.printAge = function () {
    console.log(this.age);
  };
};

const person111 = {
  name: "Rabib",
  age: 25,
};

const person222 = {
  name: "Rayen",
  age: 30,
};

addAgePrinter(person111);
addAgePrinter(person222);

person111.printAge();
person222.printAge();

console.log("");
console.log("");

const Person = function (name, age) {
  return {
    name: name,
    age: age,
    printPlayerName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. Subash",
      printPlayerName: function () {
        console.log(this.name);
      },
    },
  };
};

const rabib = Person("rabib", 35);
rabib.printPlayerName(); // this is pointing to the sakib person objecy
rabib.father.printPlayerName(); // this is pointing to the father object
console.log("");
console.log("");

// explicit binding
// this keyword is always used to use a function in a different context
// the function isin the global scope
// we cannot call the function sing hte sakib object
// and so weare going to beusing the .call()

const printPlayerName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2} & ${v3},`);
};

const sakib = {
  name: "Sakib",
  age: 35,
};
const v1 = "Handsome";
const v2 = "All-rounder";
const v3 = "Best Player";

const arrayOfOptions = [v1, v2, v3];

printPlayerName.call(sakib, v1, v2, v3);
const newFunc = printPlayerName.bind(sakib, v1, v2, v3);
newFunc();
printPlayerName.apply(sakib, arrayOfOptions);
// we are telling the programmer what the this keyword is about
// both of htem takes the same sshit, one takes single prameters, one can take object of options
// .bind() directly call kortese na, ekta instance variable er moddhe save hocche
// .bind() -> kono bahirer context er function k inner context baonno kono context theke ue korte hoi dot diye, explicitly call, bind, apply use korte pari
console.log("");
console.log("");

// new Binding
// we are using a constructor funcion
function Person1(name, age) {
  // let this = Object.create(null). Something like this happens
  // everytime the new keyword is invoked
  // return this
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old`);
}

const habib = new Person1("Habib", 35);
// it does not return the habib object, it returns a new this object whose name and age we are setting in the funciton above

//window binding {}

const printName2 = function () {
  // console.log(this);
  // console.log(this.name);
  // console.log(this);
};

const Rihan = { name: "Rihan" };

printName2();
// no implicit binding as no dots and nothing before dot
// no explicit binding as no .call or .apply given
// no new binding as no new keyword given
// this falls under window binding. this is bydefault points to the window objec
// you can also console.log thisto know whic h object ths points to
