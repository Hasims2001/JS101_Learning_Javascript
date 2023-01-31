// Problem 2: Print the odd numbers from 0 till the given limit
let limit = 50;
let start = 0;
while (start <= limit) {
  if (start % 2 != 0) {
    console.log(start);
  }
  start += 1;
}