//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
// The main idea is to count all the occuring characters(UTF-8) in string.
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

//eslint-disable-next-line no-unused-vars
const countCharacters = (str) => {
  if (str.length < 1) {
    return {};
  }
  return str.split("").reduce((acc, currValue) => {
    if (!acc[currValue]) {
      acc[currValue] = 1;
    } else {
      acc[currValue]++;
    }
    return acc;
  }, {});
};

