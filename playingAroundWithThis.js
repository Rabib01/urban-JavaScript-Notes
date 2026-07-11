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
