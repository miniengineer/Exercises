// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array
// where an uppercase letter is a person standing up.


function wave(str) {
  if (str.length < 1) {
    return [];
  }

  let wavedArr = str.split("");
  let result = wavedArr.reduce((accumulator,currentElement,currentIndex) => {
    accumulator.push([...wavedArr]);
    if(currentElement === " ") {
      return accumulator;
    } else {
      accumulator[currentIndex][currentIndex] = currentElement.toUpperCase();
    }
    return accumulator
  }, [])
  return result;
}

wave("hello");
