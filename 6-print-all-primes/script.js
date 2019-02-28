/**Write a program that prints all prime numbers.
(Note: if your programming language does not support arbitrary size numbers,
printing all primes up to the largest number you can easily represent is fine too.) **/

//function 1 - detects is a number is prime or not
// function 2 - writes down <any value> into a list
// function 3 - the solution for this exercise

function isPrime(number) {
  if(number === 2) {               //I assume that primeNumberFormula will eliminate all even numbers, but 2 is a prime number, so I added this as the first condition
    return true;
  } else if(number % 2 > 0) {
    var counter = 3;
    while (counter < number) {
      if(number % counter === 0) {
        return false;
      }
      counter++;
    }
    return true;
  } else {
    return false;
  }
}


function listAllPrimes(number1, number2) {
  while(number1 < number2) {
    if(isPrime(number1)) {
      document.write(number1 + "\n");
    }
    number1++;
  }
}

listAllPrimes(1,100);
