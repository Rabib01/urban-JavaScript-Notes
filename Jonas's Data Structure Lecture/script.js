"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

{
  // The outer [] is tellng JS to not treat it ias a literal property name, but to evaluate it first
  // more on this shit here : https://chatgpt.com/c/6a987b89-cc30-83e8-bf6a-35073914688b
  // when -> Whenever you want to create an object property using a variable or exoression
  // can  also do this =>  [`item-${x}`]: "hello"
}

const openingHours = {
  [weekDays[4]]: {
    open: 12,
    close: 12,
  },
  [weekDays[5]]: {
    open: 11,
    close: 13,
  },
  [weekDays[6]]: {
    open: 0,
    close: 24, // Open 24 hours
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

/**
 * Object.jeys do not recursively search through the entire object
 * IT looks at one level deep to the object that oyu give it
 * keys are the property names. Values are the values stored to those properties
 */

let openString = `We are open for ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openString += `${day}, `;
}
console.log(openString);
console.log("");
console.log("");

// Property values
const values = Object.values(openingHours);
console.log(values);
console.log("");
console.log("");

// Loop through the entire object we need entries - tbc : 5:12 of 10:09
const entries = Object.entries(openingHours);
console.log(entries);
console.log("");
console.log("");

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open from ${open} and close at ${close} `);
}
console.log("");
console.log("");

// Sets - Collection of unique values - cannot have duplicates
{
  /**
   * Sets do not have indexes - No way of getting values out of sets
   * All values are unique and order does not matter then we dont need to retrieve anuthing
   * we just need to know whether the value exists in the set or not
   * sets are iterables and we can loop over them when we want to
   */
}

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Burger",
  "Pasta",
  "Pasta",
  "French Fries",
  "cold-drinks",
  "Pasta",
  "Pasta",
  "Meat-Box",
]);

console.log(orderSet);
console.log("");
console.log("");

// we can add things to a new set - However they will be added only once
orderSet.add("Thai Soup");
orderSet.add("Chicken Fries");
console.log(orderSet);
console.log("");
console.log("");

// we can DELETE things from the set
orderSet.delete("cold-drinks");
console.log(orderSet);

// we cannot ACCESS these values based on indexes- below outputs to undefined
console.log(orderSet[0]);
console.log("");
console.log("");

// we can see whether a set HAS a particular value - similar to the array has method
console.log(orderSet.has("Pasta"));

// we can CLEAR the entire set and remove all of its elements to give an empty set
// orderSet.clear();
console.log(orderSet);
console.log("");
console.log("");

// we can also do this - However the b at the end will not be registered
const name = new Set("Rabib");
console.log(name);
console.log("");
console.log("");

// we can also create an empty set - will give Set(0) {size:0}
const emptySet = new Set();
console.log(emptySet);

// we can also know the size of the empty set - kind of like an array lenght
const setSize = orderSet.size;
console.log(setSize);
console.log("");
console.log("");

// sets are iterables and we can also loop through these iterables
for (const order of orderSet) {
  console.log(order);
  console.log("");
}
console.log("");
console.log("");

// main use-case for sets is to remove duplicate values in arrays in normal code bases
const restaurantStaff = [
  "Big Boss",
  "Waiter",
  "Manager",
  "Waiter",
  "Bartender",
  "Cleaner",
  "Sous-Chef",
  "Piaz-Roshun Cutter",
];

// spread operator works on all iterables - arrays that includes sets as well
const uniqueStaffsPresent = [...new Set(restaurantStaff)];
console.log(uniqueStaffsPresent);
// const numberOfUniquePositionsInTheResturant = uniqueStaffsPresent.size; This is now an array ans so it wont work
const numberOfUniquePositionsInTheResturant = new Set(restaurantStaff).size;
console.log(numberOfUniquePositionsInTheResturant);
console.log("");
console.log("");

// we can also use sets to find the number of uniue letters in any given string
const uniqueLettersOfName = new Set("Muhtasim Rabib").size;
console.log(uniqueLettersOfName);

// Guess I only have 11 unique letters in my name :( out of 26
