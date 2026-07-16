console.log(`hi`);

const arra = [2, 3, 4];
const r1 = arra.pop().toString();
console.log(arra, r1);

const r2 = arra.push(5).toString();
console.log(arra, r2);

console.log(r2);
console.log("");
console.log(arra);

console.log("");
console.log("");

Array.prototype.myFunkyFunction = function () {
  console.log(`Sup Funker`);
};

arra.myFunkyFunction();
console.log("");
console.log("");

// Inorder to add my own function for chaining

Array.prototype.myFunkyFunction2 = function () {
  console.log(`Say Hi, Funker`);
  console.log(this);
  return this;
};

const funky = arra.myFunkyFunction2().reverse();
console.log(funky);
console.log("");
console.log("");

arra.push(21);
arra.push(22);
arra.push(23);

Array.prototype.myFunkyPop = function () {
  console.log(this);
  console.log(this[this.length - 1]);
  console.log("");
  console.log(`Lenght before: ${this.length}`);
  const lastItem = this[this.length - 1];
  this.length--;
  console.log("");
  console.log(`length after  ${this.length}`);
  console.log("");
  return lastItem;
};

console.log(arra.myFunkyPop());

Array.prototype.myFunckyPop2 = function () {
  this.length--;
  return this;
};

arra.push(26);
console.log("");
console.log("");

console.log(arra);
console.log("");
console.log("");

arra.myFunckyPop2().push(27);
console.log(arra);
