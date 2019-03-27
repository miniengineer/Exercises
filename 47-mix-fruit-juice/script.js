// Story
// Jumbo Juice makes a fresh juice out of fruits of your choice.
// Jumbo Juice charges $5 for regular fruits and $7 for special ones.
// Regular fruits are Banana, Orange, Apple, Lemon and Grapes.
// Special ones are Avocado, Strawberry and Mango.
// Others fruits that are not listed are also available upon request.
// Those extra special fruits cost $9 per each.
// There is no limit on how many fruits she/he picks.
// The price of a cup of juice is the mean of price of chosen fruits.
// In case of decimal number (ex. $5.99), output should be the nearest
// integer (use the standard rounding function of your language of choice).
// Input
// The function will receive an array of strings, each with the name of a fruit.
// The recognition of names should be case insensitive. There is no case of an enmpty array input.
//
//
// Example
//
// ['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)
//
var fruits = [{type: "banana,orange,apple,lemon,grapes", price: 5}, {type: "avocado,strawberry,mango", price: 7}];


function cupOfJuicePrice(arr) {
  var fruitsLowCase = [];
  arr.forEach(function(e) {
    fruitsLowCase.push(e.toLowerCase());
  });
  var price = fruitsLowCase.reduce(function(a,b) {
    if(fruits[0].type.includes(b)) {
      return a += 5;
    } else if(fruits[1].type.includes(b)) {
      return a += 7;
    } else {
      return a += 9;
    }
  }, 0);
  price /= fruitsLowCase.length;
  price = Math.ceil(price);
  return price;
}

cupOfJuicePrice(['Mango', 'octopus', 'peach']);
