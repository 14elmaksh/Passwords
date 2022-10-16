// Assignment Code
var generateBtn = document.querySelector("#generate")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var capitalCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "0123456789".split("")
var symbols = "!@#$?*%".split("")
var output = document.querySelector("#password")

// when it is clicked there is an action

// Write password to the #password input

function writePassword() {
  var preSelect = []
  var postSelect = ""

  var passwordSize = parseInt(prompt("How long should the password be? 8-128 characters"))
 
 if (Number.isNaN(passwordSize)){
  alert("Password length must be a number");
  return null;
 }
 
  if (passwordSize < 8 || passwordSize > 128) {
    alert("INCORRECT"); 
    
  } else {
  
 if (confirm("Capital Letters?")) {
  preSelect = preSelect.concat(capitalCase);
 }

 if (confirm("Lower Case Letter?")) {
  preSelect = preSelect.concat(lowerCase);
 }

 if (confirm("Numbers")) {
  preSelect = preSelect.concat(numbers);
 }

 if (confirm("Symbols?")) {
  preSelect = preSelect.concat(symbols);
 }
console.log(preSelect);
 if (preSelect.length === 0) {
   alert("Must select one");
 }

 else { 
   
  for(let i = 0; i < passwordSize; i++) {
    var random = Math.floor(Math.random() * preSelect.length)
    postSelect += preSelect [random] 
  }
  output.innerHTML = postSelect;
}

}
 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);