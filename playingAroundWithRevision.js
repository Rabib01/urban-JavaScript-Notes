String({});
console.log([] + []);
console.log(String({}));

const person = {
  name: "Alice",
  age: 25,
};

console.log(String(person));
console.log(JSON.stringify(person));
console.log(Object.prototype.toString.call(/abc/));

console.log({} + []);
