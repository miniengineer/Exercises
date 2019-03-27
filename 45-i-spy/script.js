function add(a, b, c) {
  return a + b + c;
}

var numbers = [2,5,3];

console.log(add(numbers[0], numbers[1], numbers[2]));
console.log(add(...numbers));
console.log(add.apply(null, numbers));
console.log(add.call(null, ...numbers));
