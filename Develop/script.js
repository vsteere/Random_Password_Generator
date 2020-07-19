// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays from which the password will be generated
var sKeys = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var uKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  //this will collect the number of characters to use in the password and converts the string to integer
  var Len = parseInt(prompt("How many characters to generate in the password? Please choose a number between 8 and 128"));

  while (Len < 8 || Len > 128) {
    alert("The password has to be between 8 and 128 characters long");
    var Len = prompt("How many characters to generate in the password? Please choose a number between 8 and 128");
  };
  console.log(Len);
  //four boolean values for the password character parameters
  var uC = confirm("Would you like uppercase characters in the password? Ok for yes or Cancel for no");
  var lC = confirm("Would you like lowercase characters in the password? Ok for yes or Cancel for no");
  var Num = confirm("Would you like numbers in the password? Ok for yes or Cancel for no");
  var Spec = confirm("would you like special characters in the password? Ok for yes or Cancel for no");

  //a check and breaking alert if none of the conditions are selected. With the while loop, they will be prompted to reselect
  while (uC === false && lC === false && Num === false && Spec === false) {
    alert("You did not choose any of the conditions")
    var uC = confirm("Would you like uppercase characters in the password? Click Ok for yes or Cancel for no");
    var lC = confirm("Would you like lowercase characters in the password? Click Ok for yes or Cancel for no");
    var Num = confirm("Would you like numbers in the password? Click Ok for yes or Cancel for no");
    var Spec = confirm("would you like special characters in the password? Click Ok for yes or Cancel for no");
  }
  //create a variable to house the custom array based on the prompts
  var combine = "";

  //conditionals that check which arrays to add together
  if (uC) { combine = combine.concat(uKeys) };
  if (lC) { combine = combine.concat(lKeys) };
  if (Num) { combine = combine.concat(numKeys) };
  if (Spec) { combine = combine.concat(sKeys) };

  //checks to see if the above is running correctly
  console.log(combine);

  //create new variable that will house the password based on the length requirements and above parameters
  var pass = [];


  //for some reason it's pulling commas; need to fix
  for (i = 0; i < Len; i++) {

    var gen = combine[Math.floor(Math.random()*combine.length)];
    pass.push(gen);
  }
console.log(pass)

//converts the array into a string to push to the display
var finalPass = pass.join("");

console.log(finalPass)

document.querySelector("#password").value = finalPass;



}

