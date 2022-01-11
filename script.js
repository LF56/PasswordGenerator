// Assignment code here
document.querySelector("#generate").addEventListener("click",writePassword);
// Password Arrays
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Variable declarations
var confirmLength = "";
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacter;
var confirmNumericalCharacter;

//Confirm character amount
function generatePassword(){
  var confirmLength = (prompt("How many characters would you like to be included in your password?"));

  //LOOP
  while(confirmLength <=7 || confirmLength >= 129){
    alert("Password must be between 8 and 128 characters");
    var confirmLength =(prompt("How many characters would you like to be included in your password?"));
  }
 
 
//Confirm password characters
var confirmUppercase= confirm("Press OK to confirm your password will include uppercase characters");
var confirmLowercase= confirm("Press OK to confirm your password will include lowercase characters");
var confirmNumericalCharacter = confirm("Press OK to confirm your password will include numerical characters");
var confirmSpecialCharacter = confirm("Press OK to confirm your password will inclide special characters");
  //LOOP if not confirm correctly
  while (confirmUppercase === false && confirmLowercase === false && confirmNumericalCharacter === false && confirmSpecialCharacter === false){
    alert("You must make a selection.");
var confirmUppercase= confirm("Press OK to confirm your password will include uppercase characters");
var confirmLowercase= confirm("Press OK to confirm your password will include lowercase characters");
var confirmNumericalCharacter = confirm("Press OK to confirm your password will include numerical characters");
var confirmSpecialCharacter = confirm("Press OK to confirm your password will inclide special characters");  
}

var passwordCharacters= []

if (confirmUppercase){
  passwordCharacters= passwordCharacters.concat(alphaUpper)
}
if (confirmLowercase){
  passwordCharacters= passwordCharacters.concat(alphaLower)
}
if (confirmSpecialCharacter){
  passwordCharacters= passwordCharacters.concat(specialCharacter)
}
if (confirmNumericalCharacter){
  passwordCharacters= passwordCharacters.concat(number)
}
  console.log(passwordCharacters)

//Password 
var randomPassword= ""
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
return randomPassword;

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

