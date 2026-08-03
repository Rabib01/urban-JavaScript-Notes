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

  ["Rabib", "Rayen"].forEach(high5);

  document.body.addEventListener("click", high5);
  // returning funcitons inside other functions
  const greet = function (greeting) {
    return function (name) {
        console.log(`${name} said ${greeting}`);
    };
  };

  const greeterHey = greet("hey");
  greeterHey("Rabib");
  greeterHey("Rayen");
  
  // Souped / Curried
  // Over here greet("hey is a function itself and so it is higherOrderFunction(Shirin)")
  greet("hey")("Shirin");
  greet("hey")("Raihan");
  
  console.log("");
  console.log("");
  
  // note the pattern -> The Higher order function, the first the parameter comes;
  const greet2 = (greeting) => (name) =>
    console.log(`${name} said ${greeting}`);
  
  greet2("Hello")("Shirin");
  const add = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
  const add10 =
  (num1) =>
    (num2) =>
        (num3) =>
            (num4) =>
                (num5) =>
                    (num6) =>
                        (num7) =>
                            (num8) =>
                                (num9) =>
                                    (num10) =>
                                        console.log(
  num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10,
);


add(7)(9)(3);
*/ const init = function () {
  // why do we need to set the this keyword manually
  const airline = {
    name: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    // function declared using enhanced object literal syntax
    // ES5 version -> book : functipo(){...}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.name} flight ${this.iataCode}${flightNum} `,
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
      console.log(this.bookings);
    },
  };

  airline.book("351", "Muhtasim Rabib");
  airline.book("635", "TF Rayen");

  const airline2 = {
    name: "Euro-Wings",
    iataCode: "EW",
    bookings: [],
  };

  const book = airline.book;
  //    does not work
  //   book(23, "Sarag Williams");

  book.call(airline, 23, "Sarah Williams");
  book.call(airline2, 23, "Shirin Akter");

  // Apply method :
  // does the same shit as call, but it takes in an array as argument, instead of individual arguemtn
  const airline3 = {
    name: "Swiss Airline",
    iataCode: "SA",
    bookings: [],
  };

  const flightData = [34, "George Cooper"];
  // book.apply(airline3, flightData);
  // console.log(airline3);

  // but the modern way of doing this is to use the spread operator instead of using a diffrent methof
  book.call(airline3, ...flightData);

  // BInd methid
  const bookLH = book.bind(airline);
  const bookEW = book.bind(airline2);
  const bookSA = book.bind(airline3);
  bookEW(23, "Steven Williams");

  // Applying Book.BInd with partial applications
  const bookEW29 = book.bind(airline3, 29);
  bookEW29("Muhtasim Rabib");
  bookEW29("TF Rayen");
  // Do not go below this line for init

  // With EventListeners
  const buyButton = document.querySelector(".buy");
  airline.numberOfPlanes = 300;
  airline.buyPlane = function () {
    console.log(this);

    {
      /**
       // this keyword is set dynamically.
       // We want the this keyword to point to Lufthansa instead of the button elemeny
       // we need to manually insert the this keyword. Should we use the call or the bind ??
       // we need to pass in a function in thb event listener and not call it. Call method immediately calls the function
       // so we use bind
       // bind will return a new function
       // buyButton.addEventListener("click", airline.buyPlane.bind(airline)); And now the bind method will popint to airliune or Lufthansa
       *  
       */
    }

    this.numberOfPlanes++;
    console.log(this.numberOfPlanes);
  };

  buyButton.addEventListener("click", airline.buyPlane.bind(airline));

  // partial APplications
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));

  const addVAT = addTax.bind(null, 0.23);
  console.log(addVAT(200));

  {
    // if you want to preset the rate then it has to be the first argument in the function
    // const functionThatWasReturned = function (rate, value) {
    //   return value + value * rate;
    // };
    // const aFunctionThatReturnsAnotherFUnction = function (r, v) {
    //   return functionThatWasReturned(r, v);
    // };
    // console.log(aFunctionThatReturnsAnotherFUnction(0.1, 200));
  }

  const addTaxRate = (value) => (rate) => value + value * rate;
  console.log(addTaxRate(200)(0.2));

  //' IIFE
  (function () {
    console.log("This function will execute only once");
  })();

  (() => console.log("This function will also execute only once"))();

  {
    let isPrivate = 23;
    var isnotPrivate = 24;
  }
  console.log(isPrivate);
  console.log(isnotPrivate);

  // Do not go beyond this line
};

init();

// memorise the notes below

/**
 *  || : Returns the first truthy value or the last one if none are truthy
 * 
 *  && : Returns the first falsy value or the last one if all are truthy
 * 
 *  This "price = 199 * numPassengers," would only work if numPassengers was defined before "
 * 
 *  A ?? B ?? C ?? D : nullish coalescent : for null and undefined
 * 
 *  If a value is not null or undefined, it returns that value immediately,
 * 
 *  if a value is null or undefined it moves to the next value,
 * 
 *  If all are null or undefined it returns a last value
 * 
 * 
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
 * why are they so much helpful
 * split code into more usable and interconnected parts
 * callback functions allows usto create abstraction to code
 * abstraction : hides the detail about some code implementation as we dont really care about all that implementation
 * allows us to think about problems in a higher level
 *
 * for example we have abstracted all of the code of three functions away from the main function transformer
 * when we could have easily written all of that code there
 *
 * ** in a regular function call the this keyword points to undefined
 * so const book = airline.book will have been undefined\
 * This is not a method anymore, this is a separate function
 *
 * if we want a luftansa flight the this keyword should point to luftansa or if we want to book a eurowings flight this keyword will poinmt to eurp Wings ?
 * There are three ways that we can tell JS how to set the this keyword manually in three ways
 * call apply and bind
 *
 * in the call method the first argument is what we wantr the this to point ot
 * in the call method the first arguemnt is exactly what we want the this keyword to point to
 *
 * we are calling the book function, instead we are calling hte call methid which will call the call method and the call method will call the book function with the this keyword call to eurowings
 *
 * Just like call and apply, bind also allows us to manually set the this keyword for any function call
 * The differnece is tha tthe bind keyword does not immediately call the function, instead it immdediately returns a funnction where the this keyword is set to what we want
 *
 * PArtial appliaction : Part of the argument of the original function is already applied
 *
 * In eventListeners the this keyword always points to the element the handler is attached to
 *
 * Do not use arrow funcitons as methods as they give unexpected results
 * arrow functions with one paramenter does not need to have a parennthesis
 * Only with two or more arguments or no arguments does it need the parenthesis
//  * arrow functions are always functop0nm expression and cannot be function declerations
 * 
 * IIFE : Immediately invoked function expression 
 * A function that dissapears right after it has executed once. This is useful in async await
 * write the function expression without assigning it to any variables 
 * this is a function statement - Wrap it in a parenthesis and make it an expression from statement
 *  
  (function () {
      console.log("This function will execute only once");
    }) -> this is the function value 
 * () This is the function call 
 *    
  (function () {
      console.log("This function will execute only once");
  })() This is the entire thing   
 * 
 * Why was IIFE creasted 
 * Funciton create scopes, one function does not have access to variables from an inner scope, 
 * Therefore we say that all of the data defined inside a scope is private 
 * This data is encapsulated 
 * to protect them from accidentally being overwritten 
 * this pattern was invented -> Was not a JS feature 
 * varaibles declared with let or const create their own scope inside their block 
 * 
 * This is why if we needed data privacy we can just create a blocked scope instead of creating a function to create a scope 
 * But if you need to execute a function only once then IIFE is still the way to go ven with modern JS 
 * 
 *  
 */
