// Assignment code here

// prompted with password criteria

// set length of password (between 8 and 128 characters)

// prompt for special character types

// user selects lowercase, uppercase, numeric, and/or special characters

// validate input from user and at least one of each selected type should be included

// then generate password and display in either the box or as an alert

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
