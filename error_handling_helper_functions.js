// TODO: Create a function that validates user input
function userInput(input) {
  if (input === "" || input === null || input === undefined) {
    return "Input cannot be empty";
  }

  if (typeof input !== "string") {
    return "Input must be a string";
  }

  return "Valid Input";
}
// TODO: Create a function that demonstrates multiple error types
function errorTypes() {

  try {
    let num = 5;
    num.toUpperCase();
  } catch (err) {
    console.log("Error occured:", err.name);
    console.log("Message:", err.message);
  }
}

// TODO: Create a collection of helper functions for string manipulation
const stringHelpers = {
  toUpper(str) {
    return str.toUpperCase();
  },
  toLower(str) {
    return str.toLowerCase();
  },
  countChar(str) {
    return str.length;
  },
}

// TODO: Create helper functions for array operations
const arrayOperations = {
  getFirst(arr) {
    return arr[0];
  },
  getLast(arr) {
    return arr[arr.length - 1];
  },
  addItem(arr, item) {
    arr.push(item);
    return arr;
  },
}

console.log(userInput("Hello"));
console.log(userInput(""))

errorTypes("hello");

console.log(stringHelpers.toUpper("hello"));
console.log(arrayOperations.addItem([1, 2], 3));
