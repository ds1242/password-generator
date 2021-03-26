// Assignment code here

// prompted with password criteria

// set length of password (between 8 and 128 characters)
function passwordLength(){
  while(true){
    var passLength = parseInt(prompt("how long do you want your password? Between 8 and 128 characters"));

   if(passLength === null){
    //  user hit cancel
    alert("Please enter a number and click OK");
    return passLength();
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
function characterType(caseType){
  caseType.lowerCase = confirm("Would you like lower case characters? Click OK for Yes or CANCEL for No");
  caseType.upperCase = confirm("Would you like upper case characters? Click OK for Yes or CANCEL for No");
  caseType.numberCase = confim("Would you like numbers? Click OK for Yes or CANCEL for No");
  caseType.specialCase = confirm("Would you like symbols? Click OK for Yes or CANCEL for NO");
  return caseType;
}
// user selects lowercase, uppercase, numeric, and/or special characters

// validate input from user and at least one of each selected type should be included

// then generate password and display in either the box or as an alert
function generatePassword(){
  var passLength = passwordLength();
  console.log("password length is " + passLength);
  caseType = characterType(caseType);
  console.log("password lowerCase characters " + caseType.lowerCase);
  console.log(caseType);
  // console.log(caseType.upperCase);
  // console.log(caseType.numeric);
  // console.log(caseType.specialCase);
  return passLength;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// set character case type as true by default
var caseType = {
  lowerCase: true,
  upperCase: true,
  numberCase: true,
  specialCase: true,
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
