"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

{
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
}

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

{
  /**
   * We do not retrieve values from a set because the order does not matter
   * We can checkj whether the values exist using set.has("value")
   * we can check all of the values using set.values()
   * or turn the set into an array using [..set] and do all sorts of funky things with it
   */
}

// we can see whether a set HAS a particular value - similar to the array has method
console.log(orderSet.has("Pasta"));

// we can CLEAR the entire set and remove all of its elements to give an empty set

// orderSet.clear(); -> this clears the set to make it into an empty set

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

{
  // sets are iterables               S E T S               S T A R T S               H E R E
  // objects are not iterables
  // we can easily find the common parts between arrays
  // we can also find converts sets and arrays between themselves easilyu
}

// finding the common ingredients that are present in both italianFoods nad mexicanFoods - we use a fucking useful method known as the intersection method - most useful when we want to find the common elements between two arrays
// finding common parts between arrays -> convert them to sets -> find their intersection -> Spread them into a new array
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]);
console.log("");
console.log("");

// we also have a union method to find all of things of an array minus the duplicates -> However these were introduced in es2025 and so only the latese version of the browsers will support this
const allFoods = [...italianFoods.union(mexicanFoods)];
console.log(allFoods);
console.log("");
{
  // (sets are automatically converted in this casxe as italianFoods and mexicanFoods are already arrays)
  // another way of ding the same thing iws to -> spread to create arrays from Sets -> merge two arrays using spread syntax TOGETHER -> covert them to a new set to remove duplicates -> spread the entire thing so that the set turns to an array
  // we can also create a function for this if we had to do this thing over and over again
}
const wierdWayOfDoingTheSameTing = [
  ...new Set([...italianFoods, ...mexicanFoods]),
];
console.log(wierdWayOfDoingTheSameTing);

{
  // venn diagrams would have been so much cool here
  // we can also create a unique set from all of these, things that are present in one set only and does not intersect the other set
}

console.log("");
const uniqueItalianFoods = [...italianFoods.difference(mexicanFoods)];
console.log(uniqueItalianFoods);
console.log("");
console.log("");

{
  /**
   * This that are both present in A and B only but does not intersect
   * This is known as symmetric difference
   */
}

const uniqueItalianAndMexican = [
  ...italianFoods.symmetricDifference(mexicanFoods),
];
console.log(uniqueItalianAndMexican);

{
  /**
   * there are also is subSet of
   * isSuperOf
   * isDisjointFrom
   */
}

console.log("");
console.log("");

const arra1 = [1, 2, 3];
const arra2 = [4, 5, 6, 7, 1, 2, 3];
const commonElementsBetweenTheseArrays = [
  ...new Set(arra1).intersection(new Set(arra2)),
];
console.log(commonElementsBetweenTheseArrays);
console.log("");
console.log("");

// Maps start from here

{
  /**                                                                      M A P S               S T A R T S               H E R E
   * Maps are a lot more useful then sets
   * Data Structure that we use to map vvalues to keys
   * In objects the keys are always strings
   * In maps the keys can be anything
   * Keys can be objects or arrays or other maps
   * Easiest way to create a map is to create an empty map
   */
}

const restMap = new Map();
restMap.set("name", "Classico Italiano");
restMap.set(1, "Firenze, Italy");
restMap.set(2, "Lisbon, Protugal"); // This also returns the map with adding new elements to the map -> So we can do this console.log(restMap.set(2, "Lisbon, Portugal"));

restMap
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(false, "We are closed :( ")
  .set(true, "We are opened :D ");

// we return elements from the map using hte get method - Here the data type matters if we trued "true" or "1" it will return undefined -> this is similar to set.has()
console.log(restMap.get("name"));
console.log(restMap.get(true));
console.log(`This will give undefined: ${restMap.get("true")}`);

// this is clever but it is not readable -> Do not overuse this pattern

{
  /**
   * maps to true which gives we are opened
   */
}

const currentTime = 20;
const currentTime2 = 8;
console.log(
  restMap.get(
    currentTime > restMap.get("open") && currentTime < restMap.get("close"),
  ),
);
console.log("");
console.log(
  restMap.get(
    currentTime2 > restMap.get("open") && currentTime2 < restMap.get("close"),
  ),
);

// we have a plethora of methods for the maps as well
console.log(restMap.has("categories"));

// owner decided to close the first location in France
console.log(restMap.delete(1));
console.log(restMap);

// objects also hve the delete properties but it is not recommended that we do that operation as it is slow. // they also have the size properties
console.log(restMap.size);
console.log("");
console.log("");

// objects and arrays and other reference variables are kept ar different places in the heap and so this will not work:
restMap.set([1, 2], "test");
console.log(restMap);
console.log(`This will aslo give us undefined : ${restMap.get([1, 2])}`);

// In order for us to make this work, they both need to be the same array and not same arrays in different memory locations in the heap. This will work
const arr = [1, 2, 3];
restMap.set(arr, "test");
console.log(restMap.get(arr));

// we can also select DOM elements and put them as keys in maps -> Will provide useful later
restMap.set(
  document.querySelector("h1"),
  document.querySelector("h1").innerText,
);
console.log(restMap);

/**
 * A different way to create the values of a map without having to use the maps.set() method
 */

console.log("");
console.log("");

const question = new Map([
  ["question", "What is the best programming language in the world ?"],
  [1, "C"],
  [2, "C++"],
  [3, "C#"],
  [4, "JavaScript"],
  [5, "Java"],
  ["Correct Answer", 4],
]);

console.log(question.get("question"));
console.log(`The Correct Answer is ${question.get("Correct Answer")}`);
console.log("");
console.log("");

// we cn also retrieve the entries whose keys are values to only look know the options
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`The option number ${key} is ${value}`);
  }
}

console.log("");
console.log("");

console.log(Object.entries(openingHours));

{
  /** Output -> 
0:(2) ['thu', {…}]
1:(2) ['fri', {…}]
2:(2) ['sat', {…}] 
   */
}

// converting object to maps
console.log("");
console.log("");

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
{
  /** output of hte previous line
0: {"thu" => Object}
1:{"fri" => Object}
2: {"sat" => Object}
   */
}

function freshFromDocumentation() {
  {
    // fresh from the documentation  : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    const obj = { foo: "bar", baz: 42 };
    console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

    const arrayLike = { 0: "a", 1: "b", 2: "c" };
    console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

    const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
    console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
  }
}
{
  //   const yourAnswer = +prompt(
  //     `please give me an answer for the question : \n ${question.get("question")}`,
  //   );
}
const yourAnswer = 4;

document.querySelector("h1").innerText =
  yourAnswer === question.get("Correct Answer")
    ? `You've got the correct answer ${question.get(4)}`
    : `Your answer is incorrect, fuck U bitch! `;

// convert map to arrays
console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log("");
console.log("");

console.log(...question.keys());
console.log(...question.values());
