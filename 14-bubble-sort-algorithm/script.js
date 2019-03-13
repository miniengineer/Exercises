// function swap(array,index1,index2) {
//   var memo = array[index1];
//   array[index1] = array[index2];
//   array[index2] = memo;
//   return array;
// }

// function bubbleSort(array) {
//   while(true) { // eslint-disable-line
//     var circle = 0;
//     for(var i = 0; i < array.length; i++) {
//       if(array[i] > array[i+1]) {
//         swap(array,i,i+1);
//         circle++;
//       }
//     }
//     if(circle === 0) {
//       return array;
//     }
//   }
// }

// function bubbleSort(array,comparisonFunc) {
//   while(true) { // eslint-disable-line
//     var circle = 0;
//     for(var i = 0; i < array.length; i++) {
//         if(comparisonFunc(array[i],array[i+1])) {
//           swap(array,i,i+1);
//           circle++;
//       }
//     }
//     if(circle === 0) {
//       return array;
//     }
//   }
// }
//
// console.log(bubbleSort(products,function(num1,num2) {
//   return num1.productName > num2.productName;
// }));

var products = [
  {
    productName: "Strawberry",
    price: 900,
    discount: 10
  },
  {
    productName: "Beer",
    price: 225,
    discount: 70
  },
  {
    productName: "Udon",
    price: 400,
    discount: 60
  },
  {
    productName: "Prime Beef Rib Eye Steak 800gr",
    price: 5000,
    discount: 90
  }
];

//
// console.log(products.sort(function(a,b) {
//   if (a.discount > 100) {
//     throw "your discount of product " + a.productName + " is more than 100%";
//   }
//   if (b.discount > 100) {
//     throw "your discount of product " + b.productName + " is more than 100%";
//   }
//   if (a.discount < 0) {
//     throw "your discount of product " + a.productName + " is a negative number";
//   }
//   if (b.discount < 0) {
//     throw "your discount of product " + b.productName + " is a negative number";
//   }
//   if (a.price * ((100 - a.discount ) / 100) < b.price * ((100 - b.discount ) / 100)) {
//     return -1;
//   }
//   if (a.price * ((100 - a.discount ) / 100) > b.price * ((100 - b.discount ) / 100)) {
//     return 1;
//   }
//   return 0;
// }));

console.log(products.find(function(a) {
  return a.discount > 60;
}));
