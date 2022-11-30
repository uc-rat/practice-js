// Traversal array
// var fruits = ["Apple", "banana", "grapes"];
// console.log(fruits[1]);

// //if we want to check the length
// console.log(fruits.length);

// //if we want to navigate for in loop
// var fruits = ["Apple", "banana", "grapes"];
// //for loop

// // for (var i = 0; i<fruits.length; i++){
// //     console.log(fruits[i]);
// // }

// //for in loop => index no provide
// //  for(let elements in fruits){
// //     console.log(elements);
// //  }

// //for of loop
// for (let elements of fruits) {
//   console.log(elements);
// }

// //for each => Array.prototype.forEach()
// //calls a function or each element in array

// fruits.forEach(function(element,index,array){
//     console.log(element,index,array)
// });

// push pop
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("Kiwi"));
// console.log(fruits)

//Shift Unshift

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits)

//changing index
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";

//length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";

//slice
// const nums = [1, 23, 45, 56, 64, 102];
// const firstNums = nums.slice(0, 3);
// console.log(firstNums);

//Sorting
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits)

// //reverse an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();

// sorting in math random
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){return 0.5 - Math.random()});
// console.log(points)

//Fisher yates method for random
// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i+1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }

//max or min
// Math.max
// Math.min

//Sorting of objects
// let employees = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 27,
//     joinedDate: "December 15, 2017",
//   },

//   {
//     firstName: "Ana",
//     lastName: "Rosy",
//     age: 25,
//     joinedDate: "January 15, 2019",
//   },

//   {
//     firstName: "Zion",
//     lastName: "Albert",
//     age: 30,
//     joinedDate: "February 15, 2011",
//   },
// ];
// employees.forEach((e) => {
//     console.log(`${e.firstName} ${e.lastName}`);
// });

//array reduce method
// const numbers = [175, 50, 25];
// numbers.reduce(myFunc);
// function myFunc(total, num) {
//   return total - num;
// }