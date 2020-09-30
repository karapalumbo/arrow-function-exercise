//Refactor the below code to use two arrow functions and turn into a one-liner
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

//Refactored code below
let double = () => arr.map((val) => val * 2);

//Replace ALL functions with arrow functions
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

//Refactored code below
let squareAndFindEvens = () => {
  let squares = numbers.map((num) => {
    return num ** 2;
  });
  let evens = squares.filter((square) => {
    return square % 2 === 0;
  });
  return evens;
};
