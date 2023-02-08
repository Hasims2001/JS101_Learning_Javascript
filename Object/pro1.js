// Given an array find the unique items in the array

let arr = [10, 20, 10, 50, 30, 40, 30];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = "unique";
}
console.log(obj);