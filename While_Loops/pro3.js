// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit
let limit = 30;
let sum = 0;
let start = 0;
while (start <= 30) {
  if (start % 3 == 0) {
    sum += start;
  }
  start += 1;
}
console.log(sum);