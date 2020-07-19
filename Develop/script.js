// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays from which the password will be generated
var sKeys = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];




// function to collect the parameters
function params() {
  
  //this will collect the number of characters to use in the password
  var Len = prompt("How many characters to generate in the password? Please choose a number between 8 and 128");

  if (Len < 8) {
    alert("The password has to be at least 8 characters long");
    return;
  }
  if (Len > 128) {
    alert("The password has to be less than 128 characters long");
    return;
  }
  console.log(Len);
//four boolean values for the password character parameters
  var uC = confirm("Would you like uppercase characters in the password? Ok for yes or Cancel for no");
  var lC = confirm("Would you like lowercase characters in the password? Ok for yes or Cancel for no");
  var Num = confirm("Would you like numbers in the password? Ok for yes or Cancel for no");
  var Spec = confirm("would you like special characters in the password? Ok for yes or Cancel for no");

//a check and breaking alert if none of the conditions are selected
  while (uC===false && lC===false && Num===false && Spec===false) {
  alert("You did not choose any of the conditions")
  var uC = confirm("Would you like uppercase characters in the password? Click Ok for yes or Cancel for no");
  var lC = confirm("Would you like lowercase characters in the password? Click Ok for yes or Cancel for no");
  var Num = confirm("Would you like numbers in the password? Click Ok for yes or Cancel for no");
  var Spec = confirm("would you like special characters in the password? Click Ok for yes or Cancel for no");
}

//this variable puts the four booleans into an array
  var params = [uC, lC, Num, Spec];

console.log(params);
  return params;
};
//function that will calculate a random index within an array to pull 
function Random(arr) {
  arr[Math.floor(Math.random()*arr.length)];
};

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
//runs the function to collect the password parameters
  let options = params();
//this will add string together in an array
  var combine = [];
 //this will get a character for the password 
  var gen = [];
 //this will put all of the characters into an array 
  var pass = [];

  //conditionals to incorporate the chosen parameters
  if (options.uC) {
    combine = combine.concat(lKeys);
    gen.push(Random(lKeys));

      }

  if (options.lC){
    combine = combine.concat(uKeys);
    gen.push(Random(uKeys));

  }

  if (options.Num) {
    combine = combine.concat(numKeys);
    gen.push(Random(numKeys));
  }
 
  if (options.Spec) {
    combine = combine.concat(sKeys);
    gen.push(Random(sKeys));

  }

  for (let i=0; i<parseInt(options.Len); i++) {
    pass.push(Random(combine));

  }

  for (let i=0; i<gen.length; i++){
    pass[i] = gen[i];

  }

  console.log(combine);
  console.log(gen);
  console.log(pass.join(""));
  return pass.join("");
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
