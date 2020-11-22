// Declare a variable and assign it a value
var generateBtn = document.querySelector("#generate");
var passwordCharacters = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c",	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var specialCharacters;

//  asking user for password criteria 
function passwordQuestions() {
  resetApp();
  passwordLength = prompt('How many characters would you like your password to be? Choose a number between 8 - 128.');
  uppercaseLetters = confirm('Would you like to include uppercase letters in your password?');
  lowercaseLetters = confirm('Would you like to include lowercase letters in your password?');
  numbers = confirm('Would you like to include numbers in your password?');
  specialCharacters = confirm('Would you like to include special characters in your password?');

  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
    alert('Alert: Your password needs to contain at least 8 but no more than 128 characters.');
    passwordQuestions();
  }

  if (!uppercaseLetters && !lowercaseLetters && !numbers && !specialCharacters) {
      alert('You need to select at least one character type to include in your password.');
      passwordQuestions();
  }

  var options = {
     passwordLength: passwordLength,
     uppercaseLetters: uppercaseLetters,
     lowercaseLetters: lowercaseLetters,
     numbers: numbers,
     specialCharacters: specialCharacters}

  return options;
}

function generatePassword() {
  var options = passwordQuestions();

  if (options.uppercaseLetters) {
    passwordCharacters = passwordCharacters.concat(uppercaseLettersArray);
  }

  if (options.lowercaseLetters) {
    passwordCharacters = passwordCharacters.concat(lowercaseLettersArray);
  }

  if (options.numbers) {
    passwordCharacters = passwordCharacters.concat(numbersArray);
  }

  if (options.specialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharactersArray);
  }

  var password = "";

  for (var i = 0; i < options.passwordLength; i++) {
      var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      password = password + randomCharacter;
  }
  
  return password;
}


// Write password for #password 
function writePassword() {
  var password = generatePassword(); //gp => func 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// repeat passwordCharacters 
function resetApp() {
    passwordCharacters = [];
    passwordLength;
    uppercaseLetters;
    lowercaseLetters;
    numbers;
    specialCharacters;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
