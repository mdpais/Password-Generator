// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
function generatePassword() {
  var gamerSelect = prompt("How long do you want your password to be?", "Enter a number between 8 and 128 here");
  console.log("User selected "+gamerSelect+" characters.");
  if (gamerSelect<8) {
    alert("Password needs to be a minimum of 8 characters.");
    generatePassword();
  }
  else if (gamerSelect>128) {
    alert("Password can be a maximum of 128 characters.");
    generatePassword();
  }
  else {
    var isLowercase = confirm("Do you want to include lowercase characters");
    var isUppercase = confirm("Do you want to include uppercase characters");
    var isNumber = confirm("Do you want to include numbers");
    var isSpecial = confirm("Do you want to include special characters");
  }
  let lowerFull = "abcdefghijklmnopqrstuvwxyz";
  var arrayLower = lowerFull.split("");
  let upperFull = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arrayUpper = upperFull.split("");
  let numberFull = "1234567890";
  var arrayNumber = numberFull.split("");
  let specialFull = "~!@#$%^&*()_-+=,./\?";
  var arraySpecial = specialFull.split("");
  var startArray = [];
  if (isLowercase == true) {
    startArray = startArray.concat(arrayLower);
    console.log("Include lowercase characters.");
  }
  else if (isUppercase == false) {
    if (isNumber == false) {
      if (isSpecial == false) {
        var mustSelect = confirm("You must select at least one type of characters. Do you want to try again?");
        if (mustSelect == true) {
          generatePassword();
        }
        else {
          return;
        }
      }
    }
  }
  if (isUppercase == true) {
    startArray = startArray.concat(arrayUpper);
    console.log("Include uppercase characters.");
  }
  if (isNumber == true) {
    startArray = startArray.concat(arrayNumber);
    console.log("Include numbers.");
  }
  if (isSpecial == true) {
    startArray = startArray.concat(arraySpecial);
    console.log("Include special characters.");
  }
  console.log(startArray);
  var characterSelect = "";
  for (var i=0; i<Number(gamerSelect); i++) {
    characterSelect = characterSelect+startArray[Math.ceil(Math.random()*startArray.length)];
    console.log(characterSelect);
  }
  return(characterSelect);
}