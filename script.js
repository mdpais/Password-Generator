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
 
// Generate password
function generatePassword() {
  // Get password length
  var gamerSelect = prompt("How long do you want your password to be?", "Enter a number between 8 and 128 here");
  // Validate password length
  if (gamerSelect<8) {
    alert("Password needs to be a minimum of 8 characters.");
    generatePassword();
  }
  else if (gamerSelect>128) {
    alert("Password can be a maximum of 128 characters.");
    generatePassword();
  }
  else {
    // Get include lowercase?
    var isLowercase = confirm("Do you want to include lowercase characters");
    // Get include uppercase?
    var isUppercase = confirm("Do you want to include uppercase characters");
    // Get include numbers?
    var isNumber = confirm("Do you want to include numbers");
    // Get include special characters?
    var isSpecial = confirm("Do you want to include special characters");
  }
  // Create arrays
  let lowerFull = "abcdefghijklmnopqrstuvwxyz";
  var arrayLower = lowerFull.split("");
  let upperFull = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arrayUpper = upperFull.split("");
  let numberFull = "1234567890";
  var arrayNumber = numberFull.split("");
  // test special characters ~!@#$%^&*()_-+=,./?
  let specialFull = "!@#$%^&*";
  var arraySpecial = specialFull.split("");
  // Combine arrays based on user input received
  var startArray = [];
  if (isLowercase == true) {
    startArray = startArray.concat(arrayLower);
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
  }
  if (isNumber == true) {
    startArray = startArray.concat(arrayNumber);
  }
  if (isSpecial == true) {
    startArray = startArray.concat(arraySpecial);
  }
  console.log(startArray);
  // Generate password using random letters from the final array
  var thePassword = randomPassword();
  console.log(thePassword);
  function randomPassword() {
    var characterSelect = "";
    for (var i=0; i<Number(gamerSelect); i++) {
      var gtyg = Math.ceil(Math.random()*startArray.length-1);
      characterSelect = characterSelect+startArray[gtyg];
    }
    console.log("Final PW: "+characterSelect);
    // Validate password
    if (isLowercase == true) {
      var lowerCaseLetters = /[a-z]/g;
      if(characterSelect.match(lowerCaseLetters)) {
        console.log("includes lowercase");
      }
      else {
        console.log("doesn't include lowercase");
        thePassword = "";
        randomPassword();
      }
    }
    if (isUppercase == true) {
      var upperCaseLetters = /[A-Z]/g;
      if(characterSelect.match(upperCaseLetters)) {
        console.log("includes uppercase");
      } else {
        console.log("doesn't include uppercase");
        thePassword = "";
        randomPassword();
      }
    }
    if (isNumber == true) {
      var numbers = /[0-9]/g;
      if(characterSelect.match(numbers)) {
        console.log("includes number");
      }
      else {
        console.log("doesn't include number");
        thePassword = "";
        randomPassword();
      }
    }
    if (isSpecial == true) {
      var special = /[!@#$%^&*]/g;
      if(characterSelect.match(special)) {
        console.log("includes special");
      }
      else {
        console.log("doesn't include special");
        thePassword = "";
        randomPassword();
      }
    }
    console.log(characterSelect);
    return(characterSelect);
  }
  console.log(thePassword);
  return(thePassword);
}