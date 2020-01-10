//every method - receive two arguments 1.array 2. test function
//calls a test callback function on each element of the given array and returns true if every element pass the given test
//return false if ANY element doesn't pass it

//works and stops at 3 doesn't go further as it would do if I used forEach
//eslint-disable-next-line no-unused-vars
const every = (arr, testFunc) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }
  if (arr.length < 1) {
    return arr;
  }
  if (arguments.length < 2 || typeof testFunc !== "object") {
    throw new Error("please provide test function");
  }
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (!testFunc(arr[i])) {
      result = false;
      break;
    }
  }
  return result;
};

//map method - receive two arguments 1. array 2. callback function
//returns a new array with the return values of a callback function call on each element of the given array
//eslint-disable-next-line no-unused-vars
const map = (arr, func) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }
  if (arr.length < 1) {
    return arr;
  }
  if (arguments.length < 2 || typeof testFunc !== "object") {
    throw new Error("please provide test function");
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(func(arr[i]));
  }
  return resultArr;
};
