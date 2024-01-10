const passwordBox = document.getElementById("password");
const copyIcon = document.querySelector(".display img");
const generateBtn = document.getElementById("generate");

const length = 12;

const upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerLetters = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const symbols = "!@#$%^&*()";

const allChars = upperLetters + lowerLetters + numbers + symbols;
function generatePassword() {
  let password = "";
  password += upperLetters[Math.floor(Math.random() * upperLetters.length)];
  password += lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
generateBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);
