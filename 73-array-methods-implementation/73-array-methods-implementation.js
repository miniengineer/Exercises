//every method - receive two arguments 1.array 2. test function
//calls a test callback function on each argument of the given array and returns true if every element pass the given test
//return false if ANY element doesn't pass it


//works and stops at 3 doesn't go further as it would do if I used forEach
//eslint-disable-next-line no-unused-vars
const every = (arr, testFunc) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (!testFunc(arr[i])) {
      result = false;
      break;
    }
  }
  return result;
};


