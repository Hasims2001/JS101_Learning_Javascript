// Problem 1: Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
for (let i = 1; i <= 12; i++) {
  for (let j = 1; j <= month[i - 1]; j++) {
    console.log(j, "-", i);

  }
}