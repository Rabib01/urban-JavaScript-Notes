console.log(`hi`);

// find indexOf element whose ele name is bread
const groceryItems = [
  { name: "Milk", quantity: 1, completedStatus: false },
  { name: "Eggs", quantity: 6, completedStatus: true },
  // { name: "Bread", quantity: 2, completedStatus: false },
  { name: "Butter", quantity: 1, completedStatus: true },
];

const indexOfBread = function (array) {
  // console.log(array[1].name);
  //WithElementBread
  const indexNumber = array.findIndex((element) => element.name === "Bread");

  return indexNumber;
};

const statusChanger = function (array) {
  array.forEach((element) => {
    if (element.name === "Bread") {
      element.completedStatus = true;
    }
  });

  console.log(array);
};

const statusChangerUsingFindIndex = function (array, indexNumber) {
  // console.log(array, indexNumber);
  if (indexNumber !== -1) {
    array[indexNumber].completedStatus = true;
  } else {
    console.log("The given element was not found");
  }

  console.log(array);

  // array.findIndex((ele) => {
  //   if (ele.name === "Bread") {
  //     ele.completedStatus = true;
  //   }
  // });
  // console.log(array);
};

const itemRemoverFromGroceryList = function (array, indexNumnber) {
  console.log(array, indexNumnber);
  const removed = array.splice(indexNumnber, 1);
  console.log(array, removed);
  return array;
};

const breadIndex = indexOfBread(groceryItems);
console.log(breadIndex);
statusChangerUsingFindIndex(groceryItems, breadIndex);
// statusChanger(groceryItems);
// console.log(itemRemoverFromGroceryList(groceryItems, breadIndex));
