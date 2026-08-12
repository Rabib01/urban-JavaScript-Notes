/**
 * https://exercism.org/tracks/javascript/exercises/train-driver
 * Some exercises to practise spread and rest. The questions and answers must be solved using using spreasd and rest only
 * Been awake the entire night studying, dont feel like writing creating nerw arrays for the operations
 */

const getListOfWagons = function (...arguments) {
  return arguments;
};

console.log(getListOfWagons(1, 7, 12, 3, 14, 8, 5));

const fixListOfWagons = function (array) {
  const [one, two, ...rest] = array;
  return [...rest, one, two];
};

console.log(fixListOfWagons(getListOfWagons(2, 5, 1, 7, 4, 12, 6, 3, 13)));

const correctListOfWagons = function (array1, array2) {
  // What a stupid quuestion this is
  const [l1, l2, l3, l4, l5] = array1;
  const [wg1, wg2, wg3, wg4] = array2;
  return [l1, wg1, l2, wg2, l3, wg3, l4, wg4, l5];
};

// did not understand the question properly-was actually a pretty good quesiton to practise rest and spread
const correctListOfWagons2 = function (array1, array2) {
  const [l1, ...rest] = array1;
  return [...[l1, ...array2], ...rest];
};

console.log(
  correctListOfWagons(
    getListOfWagons(1, 5, 20, 7, 4, 8),
    getListOfWagons(3, 17, 6, 15),
  ),
);

console.log(
  correctListOfWagons2(
    getListOfWagons(1, 5, 20, 7, 4, 8),
    getListOfWagons(3, 17, 6, 15),
  ),
);
