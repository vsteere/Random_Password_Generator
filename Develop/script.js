// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays from which the password will be generated
var sKeys = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//user prompts setting parameters of the password
var uC = confirm("Would you like uppercase characters in the password? OK is Yes, Cancel is No");
var lC = confirm("Would you like to include lowercase characters in the password? OK is Yes, Cancel is No");
var Num = confirm("Would you like to include numbers in the password? OK is Yes, Cancel is No");
var Spec = confirm("Would you like to include special characters in the password? OK is Yes, Cancel is No");


//if all categories are said as no, prompt the user to redo
while (uC === false && lC === false && Num === false && Spec === false) {
  alert("You have not entered any parameters for the password");
  var uC = confirm("Would you like uppercase characters in the password? OK is Yes, Cancel is No");
  var lC = confirm("Would you like to include lowercase characters in the password? OK is Yes, Cancel is No");
  var Num = confirm("Would you like to include numbers in the password? OK is Yes, Cancel is No");
  var Spec = confirm("Would you like to include special characters in the password? OK is Yes, Cancel is No");


// //user prompt for the password length
var Len = prompt("How many characters to generate in the password? Please choose a value between 8 and 128 characters");

//check to see if the password is within the length parameter. If it is not have user re-enter
while (Len < 8 || Len > 128) {
  alert("Please enter a value between 8 and 128");
  var Len = prompt("How many characters to generate in the password? Please choose a value between 8 and 128 characters");
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
