// You will be given an array of objects (hashes in ruby) representing data about developers
// who have signed up to attend the coding meetup that you are organising for the first time.
//
// Your task is to return the number of JavaScript developers coming from Europe.
//
// For example, given the following list:
//
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// In ruby:
//

// your function should return number 1.
//
// If, there are no JavaScript developers from Europe then your function should return 0.
//
// Notes:
//
// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

function whoIsFromEurope(array) {
  let result = array.reduce((a,b) => {
    if(b.continent === "Europe" && b.language === "JavaScript") {
      return a + 1;
    } else {
      return a;
    }
  }, 0);
  return result;
}

var list1 = [
  { firstName: "Noah", lastName: "M.", country: "Switzerland", continent: "Europe", age: 19, language: "JavaScript" },
  { firstName: "Maia", lastName: "S.", country: "Tahiti", continent: "Oceania", age: 28, language: "JavaScript" },
  { firstName: "Shufen", lastName: "L.", country: "Taiwan", continent: "Asia", age: 35, language: "HTML" },
  { firstName: "Sumayah", lastName: "M.", country: "Tajikistan", continent: "Asia", age: 30, language: "CSS" }
];

whoIsFromEurope(list1);
