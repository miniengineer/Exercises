debugger;

function asteriskIt(numbers) {
  if (typeof numbers === 'string') {
    numbers = numbers.split('');
  }
  numbers.forEach(function (currentElement, currentIndex) {
    if (currentElement % 2 === 0 && numbers[currentIndex + 1] % 2 === 0) {
      numbers.splice(currentIndex + 1,0,'*');
      console.log(numbers);
    }
  });
  return numbers;
}


console.log(asteriskIt([1, 2, 4, 8, 16, 4]));
