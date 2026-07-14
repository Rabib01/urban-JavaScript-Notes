// console.log(`Hello Idiot!`);
console.log(`To find the largest element in an array`);
const arr = [21, 23, 4, 51, 12, 63, 21, 22, 32, 12, 32, 55];
const largestElementFinder = function (array) {
  //   console.log(array);
  let largestElement = arr[0];
  array.forEach((ele, i, arr) => {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  });
  console.log(`The largest element in this array is : ${largestElement}`);
};

largestElementFinder(arr);

console.log("");
console.log("");

// this property using implicit binding.

// Koto number line e kon jaigai function ta call hoise
// left e dot notation thakle oitar left e jeita ase oita hocche this
const sakib = {
  name: "sakib",
  age: "35",
  printPlayerName: function (name) {
    console.log(this.name);
  },
};

sakib.printPlayerName();
console.log("");
console.log("");

// implicit binding second method
const rabib = {
  name: "Rabib",
  age: "35",
};

const rayen = {
  name: "Rayen",
  age: "35",
};

const printPlayerNameFunction = function (object) {
  object.printPlayerName = function () {
    console.log(this.name);
  };
};

printPlayerNameFunction(rabib);
printPlayerNameFunction(rayen);

rabib.printPlayerName();
rayen.printPlayerName();
console.log("");
console.log("");

console.log(rabib, rayen);
console.log("");
console.log("");
console.log(`hi world`);
