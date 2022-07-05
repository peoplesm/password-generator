// Assignment Code
var generateBtn = document.querySelector("#generate");

//Char Arrays
let lowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let symArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
];
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let passwordArr = []; // Concat into this array
let newPassword = []; // Makes the password

// Add event listener to generate button and reset button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function generatePassword() {
  //Generate char length prompt
  let pwLength = parseInt(
    prompt("How many characters would you like your Password to be? (8-128)")
  );

  //Lower case confirmation
  let lowerCaseConf = confirm("Do you want lowercase?");

  //Upper case confirmation
  let upperCaseConf = confirm("Do you want uppercase?");

  //Symbol Confirmation
  let symbolsConf = confirm("Do you want symbols?");

  //Number Confirmation
  let numberConf = confirm("Do you want numbers?");

  if (pwLength >= 8 && pwLength <= 128) {
    if (lowerCaseConf) {
      //Add lowerArr
      passwordArr = passwordArr.concat(lowerArr);
    }
    if (upperCaseConf) {
      //Add upperArr
      passwordArr = passwordArr.concat(upperArr);
    }
    if (symbolsConf) {
      //Add symbols
      passwordArr = passwordArr.concat(symArr);
    }
    if (numberConf) {
      //Add Numbers
      passwordArr = passwordArr.concat(numArr);
    }
    for (let i = 0; i < pwLength; i++) {
      newPassword = newPassword.concat(
        passwordArr[Math.floor(Math.random() * passwordArr.length)]
      );
    }
  } else {
    alert("Password must be between 8 and 128 characters please.");
  }

  if (!lowerCaseConf && !upperCaseConf && !symbolsConf && !numberConf) {
    alert("Please choose at least one character option.");
  }
  return newPassword.join("");
}

// Write password to the #password input
function writePassword() {
  passwordArr = [];
  newPassword = [];
  var password = generatePassword();
  document.querySelector("#password").value = password;
}
