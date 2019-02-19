/** Write a program that asks the user for a number n and gives them the possibility to choose
between computing the sum and computing the product of 1,…,n. **/

var giveAnumber = "Can you give me a number?"
var sumOrProduct = "Do you need the sum or the product?"


function question() {
  var number = Number(prompt(giveAnumber));
  var choice = prompt(sumOrProduct);
  /** note: unfortunately, I do not know how to create prompt with checkboxes,
  so I am building my if statement on an assumption that user will write either "sum" or "product"
  that is why I added else **/
  //
  if(choice == "sum") {
    var result1 = 1;
    while(number > 0) {
      result1 += number;
      number--;
    }
    alert(result1);
  }
  if(choice == "product") {
    var result2 = 1;
    while(number > 0) {
      result2 *= number;
      number--;
    }
    alert(result2);
  } else {
    alert("please check the spelling!");
  }
}


question();
