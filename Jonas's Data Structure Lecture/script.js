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
 *
 */

let openString = `We are open for ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openString += `${day}, `;
}
console.log(openString);

// Pro
