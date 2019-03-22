// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function convertToCamelCase(string) {
  var regex = /(?<=[-])[a-z]/;
  while (string.search(/[-]/) !== -1) {
    var lowerCase = string[string.search(regex)];
    var upperCase = string[string.search(regex)].toUpperCase();
    string = string.replace(lowerCase,upperCase);
    string = string.replace(/[-]/,"");
  }
  return string;
}

function toCamelCase(string) {
  return string.replace(/-([a-z])/g, function(match) {
    return match[1].toUpperCase();
  });
}

console.log(toCamelCase("the-best-warrior"));



// var myName = ["Minira","Samadova"];
//
// function join(array,separator = " ") {
//   var string = "";
//   if (array == null || array.length == 0) {
//     return string;
//   }
//   for(var i = 0; i < array.length-1;i++) {
//     string += array[i];
//     string += separator;
//   }
//   string += array[array.length-1];
//   return string;
// };
//
// If no separator is provided, the default should be a string space ' '.
// And it will return an empty string if no array is provided as the first input.
//
// join("&")
//
// function show(variable,number) {
//   var string = "";
// }
