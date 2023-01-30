// Problem 4: Given 3 numbers (all different values), print which is greatest

num1 = 21;
num2 = 234;
num3 = 1312;

if(num1 > num2 && num1 > num3){
  console.log(num3, " is greatest!");
} else if(num2 > num1 && num2 > num3){
  console.log(num2, " is greatest!");
}else if(num3 > num1 && num3 > num2){
  console.log(num3, " is greatest!");
}else{
  console.log("No one!");
}