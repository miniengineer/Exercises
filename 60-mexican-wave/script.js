// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array
// where an uppercase letter is a person standing up.
//
// Example:
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

function wave(str) {
  if (str.length < 1) {
    return [];
  }

  str = str.split("");
  let array = [...str];
  let result = [];
  array.forEach((currentElement, currentIndex) => {
    result.push([...str]);
    if (currentElement === " ") {
      return " ";
    } else {
      result[currentIndex][currentIndex] = currentElement.toUpperCase();
    }
  });
  result = result.map(element => {
    element = element.join("");
    return element;
  });
  return result;
}

wave("minira");
