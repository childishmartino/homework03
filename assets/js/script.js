// Var Assignment 
var generateBtn = document.querySelector("#generate");
// Var Assignment - Character Types
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Generate Password
function generatePassword() {
  var options = getPasswordOptions();
  var possibleChar = [];
  var password = "";

  // Password Options
  function getPasswordOptions() {

    // determine length
    var confirmLength = parseInt(prompt("How long would you like your password to be? Note: needs to be between 8-128"));
    if (confirmLength < 8) {
      alert("Please enter a number greater than 8")
      return
    } if (confirmLength > 128) {
      alert("Please enter a number less than 128")
      return
    } if (Number.isInteger(confirmLength) === false) {
      alert("Please enter a number between 8-128")
      return
    }

   // console.log(confirmLength);

    // confirm character types
    var lowerConfirm = confirm("Do you want lowercase letters in your password?");
    var upperConfirm = confirm("Do you want uppercase letters in your password?");
    var numberConfirm = confirm("Do you want numbers in your password?");
    var specialConfirm = confirm("Do you want special characters in your password?");

    // console.log(lowerConfirm);
    // console.log(upperConfirm);
    // console.log(numberConfirm);
    // console.log(specialConfirm);

    // if the user hits cancel on everything
    if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
      alert("Do you want this password or not?");
      return
    }

    var passwordOptions = {
      confirmLength: confirmLength,
      lowerConfirm: lowerConfirm,
      upperConfirm: upperConfirm,
      numberConfirm: numberConfirm,
      specialConfirm: specialConfirm,
    }

    return passwordOptions;
  }

  // adding allowed password options to be chosen from
  if (options.lowerConfirm) {
    possibleChar = possibleChar.concat(lowercase);
  } if (options.upperConfirm) {
    possibleChar = possibleChar.concat(uppercase);
  } if (options.numberConfirm) {
    possibleChar = possibleChar.concat(number);
  } if (options.specialConfirm) {
    possibleChar = possibleChar.concat(special);
  }

  // randomly selecting an option from the array for each character to the length we designated
  for (var i = 0; i < options.confirmLength; i++) {
    var index = Math.floor(Math.random() * possibleChar.length);
    var generatedPassword = possibleChar[index];
    password = password.concat(generatedPassword)
  }

  return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
