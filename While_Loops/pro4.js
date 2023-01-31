// Problem 4: Print the average of even numbers from 1 to 100 (both included)
let start = 0;
let end = 100;
let sum = 0;
let count = 0;

while(start <= end){
  if(start%2 == 0){
     sum += start;
     count += 1;
  }
  start += 1;
}

let avg = sum/count;
console.log(avg);
