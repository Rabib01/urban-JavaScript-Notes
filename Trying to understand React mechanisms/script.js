/**
 *
 */

let groceryItems = [
  { name: "banana", completed: true, quantity: 1 },
  { name: "mango", completed: true, quantity: 2 },
];

const groceryItemHandler = function (object) {
  groceryItems.push(...groceryItems);
};

// groceryItemHandler({ name: "banana", completed: true, quantity: 1 });
// groceryItemHandler({ name: "mango", completed: true, quantity: 2 });
// groceryItemHandler({ name: "pineapple", completed: true, quantity: 5 });

console.log(groceryItems);

const newGroceryItems = [...groceryItems];
console.log(newGroceryItems);
