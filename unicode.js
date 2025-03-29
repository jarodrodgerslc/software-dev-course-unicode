//Starter Code
// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0); 
let thirdCodePoint = inputString1.charCodeAt(3); 

// Task 2
let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108); 

// Task 3
let inputString2 = "Launch";
let firstChara = Number(inputString2.charCodeAt(0));
let secondChara = Number(inputString2.charCodeAt(1));
let thirdChara = Number(inputString2.charCodeAt(2));
let fourthChara = Number(inputString2.charCodeAt(3));
let fifthChara = Number(inputString2.charCodeAt(4));
let lastChara = Number(inputString2.charCodeAt(5));
let swappedString = String.fromCharCode(lastChara,secondChara,thirdChara,fourthChara,fifthChara,firstChara); 

console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});
