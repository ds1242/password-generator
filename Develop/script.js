// Assignment code here
function poolCheck(caseType){
  var symbolCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerCharacters = "abcdefghijklmnopqrstuvwyxz";
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVQYXZ";
  var numericCharacters = "0123456789";
  var characterPool = '';

  // check each possible combo to determine the pool of possible characters to pull into the random password
  // there has to be a better way to do this
  if(caseType.lowerCase === true && caseType.upperCase === false && caseType.specialCase === false && caseType.numberCase === false){
    
    characterPool = lowerCharacters;
    return characterPool;

  } 
    else if(caseType.lowerCase === true && caseType.upperCase === true && caseType.specialCase === false && caseType.numberCase === false){
      
      characterPool = lowerCharacters.concat(upperCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === true && caseType.upperCase === true && caseType.specialCase === true && caseType.numberCase === false){
      characterPool = lowerCharacters.concat(upperCharacters,symbolCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === true && caseType.upperCase === true && caseType.specialCase === true && caseType.numberCase === true){
      
      characterPool = lowerCharacters.concat(upperCharacters,symbolCharacters, numericCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === false && caseType.upperCase === true && caseType.specialCase === false && caseType.numberCase === false){
    
      characterPool = upperCharacters;
      return characterPool;

  } 
    else if(caseType.lowerCase === false && caseType.upperCase === true && caseType.specialCase === true && caseType.numberCase === false){
    
      characterPool = upperCharacters.concat(symbolCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === false && caseType.upperCase === true && caseType.specialCase === true && caseType.numberCase === true){
    
      characterPool = upperCharacters.concat(symbolCharacters, numericCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === false && caseType.upperCase === false && caseType.specialCase === true && caseType.numberCase === false){
    
      characterPool = symbolCharacters;
      return characterPool;

  } 
    else if(caseType.lowerCase === false && caseType.upperCase === false && caseType.specialCase === true && caseType.numberCase === true){
    
      characterPool = symbolCharacters.concat(numericCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === true && caseType.upperCase === false && caseType.specialCase === true && caseType.numberCase === true){
    
      characterPool = symbolCharacters.concat(numericCharacters, lowerCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === false && caseType.upperCase === false && caseType.specialCase === false && caseType.numberCase === true){
    
      characterPool = numericCharacters;
      return characterPool;

  } 
    else if(caseType.lowerCase === true && caseType.upperCase === false && caseType.specialCase === false && caseType.numberCase === true){
    
      characterPool = lowerCharacters.concat(numericCharacters);
      return characterPool;

  } 
    else if(caseType.lowerCase === true && caseType.upperCase === true && caseType.specialCase === false && caseType.numberCase === true){
    
      characterPool = lowerCharacters.concat(upperCharacters, numericCharacters);
      return characterPool;
  } 
    else if(caseType.lowerCase === true && caseType.upperCase === false && caseType.specialCase === true && caseType.numberCase === false){
    
      characterPool = lowerCharacters.concat(symbolCharacters);
      return characterPool;
  } 
    else if(caseType.lowerCase === false && caseType.upperCase === true && caseType.specialCase === false && caseType.numberCase === true){

      characterPool = upperCharacters.concat(numericCharacters);
      return characterPool;

    }
};

// set length of password (between 8 and 128 characters)
function passwordLength(){
  while(true){
    var passLength = parseInt(prompt("how long do you want your password? Between 8 and 128 characters"));

   if(passLength === null){
    //  user hit cancel so restart loop
    alert("Please enter a number and click OK");
    return passwordLength();
    } else {
      // check that something is entered, if it is a number, and then if the value is less than 8 or longer than 128
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
function caseCheck(){
  var lowerCase = confirm("Would you like lower case characters? Click OK for Yes or CANCEL for No");
  var upperCase = confirm("Would you like upper case characters? Click OK for Yes or CANCEL for No");
  var numberCase = confirm("Would you like numbers? Click OK for Yes or CANCEL for No");
  var specialCase = confirm("Would you like special characters? Click OK for Yes or CANCEL for No");
  // have to check if all false return message else return values
  // validate input from user and at least one of each selected type should be included
  if(lowerCase === false && upperCase === false && numberCase === false && specialCase === false){
    window.alert("Please select at least one of the options")
    return caseCheck();
  } else {
    return {
      lowerCase,
      upperCase,
      numberCase,
      specialCase
    };
  }

}


// then generate password and display in either the box or as an alert
function generatePassword(passLength, caseType){
  var password = '';
  var characterPool = poolCheck(caseType);

  // need to determine value of caseTypes then do loops based on that
  // sets password here
  for(var i = 0; i < passLength; i++){
    password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }
  // return the password
  return password;  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // ask for password length and store it in variable passLength
  var passLength = passwordLength();
  // check upper, lower, special characters, and numbers.  Store in object caseType
  var caseType = caseCheck();
  // pass prompt options into generatePassword, which will return the password
  var password = generatePassword(passLength, caseType);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
