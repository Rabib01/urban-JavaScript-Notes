"use strict";

/* 

const bookings = [];

  const createBookings = function (
    flightNum,
    numPassengers = 2,
    price = 199 * numPassengers,
) {
    // ugly format before ES6 -> es5 way of doing it
    //   numPassengers = numPassengers || 1;
    //   price = price || 199;
    
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    
    console.log(booking);
    bookings.push(booking);
  };

  createBookings("L123H");
  createBookings("L123A4V", 2, 850);
  createBookings("L123A4V4E");
  createBookings("L123A4V4E9OPE", undefined, 1000);
  
  // pass by value vs pass by refeeremnce
  
  const flight = "L23TRD";
  const passenger = {
    name: "Muhtasim",
    age: 35,
    ticketNum: 232323123124235,
};

  const flightChecker = function (flightNum, passenger) {
    // do not ever change arguments liek this
    flightNum = "23LD45";
    passenger.name = "Mr. " + passenger.name;
    
    if (passenger.ticketNum === 232323123124235) alert("checked In");
    else alert("fuckOFF mate!");
};

flightChecker(flight, passenger);
console.log(flight);
console.log(passenger);

const newPassport = function (person) {
    passenger.ticketNum = Math.trunc(Math.random() * 10000000);
};

newPassport(passenger);
flightChecker(flight, passenger);

*/ const init = function () {
  // passing in a function as an argument to another function - lecture 138

  const sentence = "the quick brown fox jumps over the lazy dog";

  const oneWord = function (string) {
    return string.replace(/ /g, "").toLowerCase();
  };

  const upperFirstLetterOfEachWord = function (string) {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const upperFirstWord = function (string) {
    const [first, ...rest] = string.split(" ");
    return [first.toUpperCase(), ...rest].join(" ");

    // higher-orderFunctions fn{}c
  };

  const transformer = function (string, fn) {
    console.log(`The original string was : ${string}`);
    console.log(`The transformed string was : ${fn(string)}`);

    // remember that they are first class citizens so they also have methods and properties of thir own
    console.log(`The string was transformed by : `, fn.name);
  };

  transformer(sentence, upperFirstWord);
  transformer(sentence, upperFirstLetterOfEachWord);
  transformer(sentence, oneWord);

  //different ways of using callbacks

  const high5 = function () {
    console.log("hi five");
  };

  document.body.addEventListener("click", high5);
};
init();
/**
 *  || : Returns the first truthy value or the last one if none are truthy
 *  && : Returns the first falsy value or the last one if all are truthy
 *  This "price = 199 * numPassengers," would only work if numPassengers was defined before "
 * for flightChecker : the output : changes for the flightNum but not for the object :
 * This is beacuse flightNum is a different variable that was created as
 * flightNum contains a copy of the flight but not the origignal flight variable
 * same as flightNum = flight -> this expression is evaluated and stored in flightNum and is a differet varioablopbe
 * therefore ** it ** did ** not ** change ** the ** outside ** variable !!
 * when we pass a referecne type to the function, what is copied is really just thereference to the object in the memory heap
 * They both point to the same object in memory
 *
 *  objects behaving in this way when they are passed into functions have unforseeable consequences
 *
 * Functions are first class citizens
 * this means that they are another type of objects
 * and so they are values
 * this means that they can be stored in variables or object porperties
 * pass functions as argumetns to another function
 * can also return a function as a return statement from other functions
 * Functions are objects and so they have methods on themselves as well like the call and bind
 *
 * a higher order function is a function that receives another function as an argument, or that returns a new function in its return statemetn or both
 * the function that is passed in as an arguement is called a callback function
 * this is only possible because of first class functions
 *
 * first class functions vs higher orderfunctions
 * first class functions is just a feature that a programming language has or does nbot have
 * all this means is that a functioon behaves as a value in a programming language that treats it as a first class citizen
 *
 * higher order functions are only possible if a language supports first class functions
 *
 *
 */
