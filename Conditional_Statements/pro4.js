// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let username ="Hasims2001";
let password = "developer";

let userinput_username = "Hasims2001";
let userinput_password = "PASSWORD";

if (userinput_username == username){
  if(userinput_password == password){
    console.log("You can login!");
  }else{
    console.log("Password is not match!");
  }
}else{
  console.log("Username is not match!");
}