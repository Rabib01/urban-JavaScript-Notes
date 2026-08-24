/* prettier-ignore-file */

/*
 * https://exercism.org/tracks/javascript/exercises/train-driver
 * Some exercises to practise spread and rest. The questions and answers must be solved using using spreasd and rest only
 * Been awake the entire night studying, dont feel like writing creating nerw arrays for the operations
 * Doing this entire fucking thing again
 *
 */

function getListOfWagons(...arguments) {
  return arguments;
}

console.log(getListOfWagons(1, 7, 12, 3, 13, 8, 5));

// move the first two wagons to the end of the train array :
function fixListOfWagons(array) {
  const [first, second, ...everythingElse] = array;
  const newArr = [...everythingElse, first, second];
  return newArr;
}

console.log(fixListOfWagons(getListOfWagons(2, 5, 1, 7, 4, 12, 6, 3, 13)));

// add missing values
const eachWagonsID = getListOfWagons(1, 5, 20, 7, 4, 8);
const missingWagons = getListOfWagons(3, 17, 6, 15);

function correctListOfWagons(array1, array2) {
  const [first, ...everythingElse] = array1;
  const newArr = [first, ...array2, ...everythingElse];
  return newArr;
}

console.log(correctListOfWagons(eachWagonsID, missingWagons));

// extending routing information
const route = {
  from: "Berlin",
  to: "Hamburg",
};
const route2 = {
  from: "Monaco",
  to: "Zurich",
};
const route3 = {
  from: "Latvia",
  to: "Lithuania",
};
const route4 = {
  from: "Paraguay",
  to: "Argentina",
};

const moreRouteInformation = {
  length: "105",
  speed: "Hamburg",
};
const moreRouteInformation2 = {
  length: "10",
  timeOfArrival: "10:10",
};

function extendRouteInformation(obj1, obj2) {
  const combinedInformation = { ...obj1, ...obj2 };
  return combinedInformation;
}

console.log(extendRouteInformation(route, moreRouteInformation));
console.log(extendRouteInformation(route2, moreRouteInformation));
console.log(extendRouteInformation(route3, moreRouteInformation));
console.log(extendRouteInformation(route4, moreRouteInformation));

//Separate Arrival time from routing information                    || remember that the right side is the new variable name and the left side is the actual property name
function separateTimeOfArrival(obj1, obj2) {
  const { timeOfArrival: time, ...everythingElse } = extendRouteInformation(
    obj1,
    obj2,
  );
  const newArr = [time, everythingElse];
  // const newArr2 = {time, ...everythingElse};
  return newArr;
}

console.log(
  separateTimeOfArrival(extendRouteInformation(route, moreRouteInformation2)),
);
