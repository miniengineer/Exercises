// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function convertToCamelCase (string) {
  var regex = /(?<=[-])[a-z]/;
  while (string.search(/[-]/) !== -1) {
    var lowerCase = string[string.search(regex)];
    var upperCase = string[string.search(regex)].toUpperCase()
    string = string.replace(lowerCase,upperCase);
    string = string.replace(/[-]/,"");
  }
  return string;
}

convertToCamelCase("the-best-warrior");
