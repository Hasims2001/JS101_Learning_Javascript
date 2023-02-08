// Problem 2: Print Prime Numbers from 1 to given limit
let given = 100;


for (let i = 2; i < given; i++) {
  let check = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      check = false;
      break;
    }
  }
  if (check) {
    console.log(i);
  }
}
