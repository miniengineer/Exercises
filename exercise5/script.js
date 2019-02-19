var number = Number(prompt("Can you give me a number?"));
var choice = prompt("Do you need the sum or the product?");

function sum(number) {
  var result = 1;
  while(number > 0) {
    result += number;
    number--;
  }
  alert(result);
}

function product(number) {
  var result = 1;
  while(number > 0) {
    result *= number;
    number--;
  }
  alert(result);
}

function question() {
if(choice == "sum") {
  sum(number);
} else if (choice == "product") {
  product(number);
  } else {
    alert("English, motherfucker, DO YOU SPEAK IT?")
    }

}

question();
