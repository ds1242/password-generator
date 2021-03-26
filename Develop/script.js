// Assignment code here

// prompted with password criteria

// set length of password (between 8 and 128 characters)
function passwordLength(){
  while(true){
    var passLength = parseInt(prompt("how long do you want your password? Between 8 and 128 characters"));

   if(passLength === null){
    //  user hit cancel
    alert("Please enter a number");
    } else {
      if(passLength === "" || isNaN(passLength) || passLength < 8 || passLength > 128){
        alert("Please enter a valid number.");
      } else {
        // return the valid entry
        return passLength;
      }
    }
  }
}
// prompt for special character types

// user selects lowercase, uppercase, numeric, and/or special characters

// validate input from user and at least one of each selected type should be included

// then generate password and display in either the box or as an alert
function generatePassword(){
  var passLength = passwordLength();
  console.log("password length is " + passLength);
  return passwordLength;
}
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
