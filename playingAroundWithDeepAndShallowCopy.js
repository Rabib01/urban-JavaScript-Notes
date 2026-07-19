const languageA = {
  title: "JavaScript",
  ESTD: 1995,
  libraries: ["React", "Vue", "Svelte"],
};

//Ver1
languageB = JSON.parse(JSON.stringify(languageA));

//Ver2
languageC = structuredClone(languageA);

//ver3
// //function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   const copy = Array.isArray(obj) ? [] : {};

//   for (const key in obj) {
//     copy[key] = deepCopy(obj[key]);
//   }

//   return copy;
// }

/**
 * const languageA = {
  title: "JavaScript",
  ESTD: 1995,
  libraries: ["React", "Vue", "Svelte"],
};

//Ver1
languageB = JSON.parse(JSON.stringify(languageA));

//Ver2
languageC = structuredClone(languageA);

//ver3
// //function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   const copy = Array.isArray(obj) ? [] : {};

//   for (const key in obj) {
//     copy[key] = deepCopy(obj[key]);
//   }

//   return copy;
// }


Pros
Deep copies nested objects and arrays.
Handles Map, Set, Date, RegExp, ArrayBuffer, etc.
Built into modern browsers and Node.js.
Cons
Cannot clone functions.
Cannot clone DOM elements.

Pros
Very simple.
Works for plain objects and arrays.
Cons

It loses or changes several types of data.

Pros
Good interview exercise.
Helps understand recursion.
Cons
Doesn't correctly handle special objects like Date, Map, Set, RegExp, circular references, etc., unless you add extra logic.


This gets into an important concept: what does it mean to "copy" a function?

The short answer is:

In JavaScript, functions are objects, but they are almost never deep-copied. Instead, the function reference is copied.

For example:

const person = {
  name: "Sakib",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const copy = {
  ...person,
};

console.log(person.greet === copy.greet); // true

Both objects point to the same function object.

Why is this okay?

Functions are generally immutable. You don't change the code inside a function at runtime. So sharing one function between many objects is perfectly safe.

What if I really want a new function object?

You can create one, but it's usually a bad idea.

For example:

const obj = {
  greet() {
    console.log("Hello");
  },
};

const copy = {
  greet: obj.greet.bind(null),
};

console.log(obj.greet === copy.greet); // false

or

const copy = {
  greet: (...args) => obj.greet(...args),
};

These create new function objects, but they are wrappers, not copies of the original function.

Can't I clone the function's source code?

Technically you can do something like:

const fn = function (a, b) {
  return a + b;
};

const clone = eval("(" + fn.toString() + ")");

or

const clone = new Function("a", "b", "return a + b;");

But this is strongly discouraged because:

❌ Doesn't preserve closures.
❌ Loses lexical scope.
❌ Breaks on many kinds of functions.
❌ Uses eval, which has security and performance issues.

Example:

function makeCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = makeCounter();

// Trying to clone this function is impossible because
// the hidden `count` variable lives inside its closure.

There is no API in JavaScript that can copy that hidden closure.

How do libraries like Lodash handle functions?

They don't clone them.

For example:

const obj = {
  x: 1,
  greet() {
    console.log("Hi");
  },
};

const clone = _.cloneDeep(obj);

console.log(obj.greet === clone.greet); // true

Even Lodash simply copies the function reference.

So what's the correct solution?

There isn't a general-purpose way to deep-copy arbitrary JavaScript functions because a function contains more than just its source code—it also contains its closure, execution context, internal slots, and other engine-managed state that JavaScript does not expose.

For that reason, every reputable deep-cloning library and the built-in structuredClone() do not clone functions. They either:

Share the same function reference (Lodash's approach), or
Throw an error (structuredClone()).

So, in real-world JavaScript, the standard practice is to deep-copy the data while leaving function properties as shared references.
 * 
 * 
 * 
 * 
 */
