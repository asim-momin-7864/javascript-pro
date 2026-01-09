// Calculator

//TODO Taking user input as String "12 + 4"
//TODO Removing white spaces
//TODO convert it into number
//TODO handle wrong inputs (letters)
//TODO handle zero Divisions expressions
//TODO Return Result or Error

//Input
let inputString = " 12  +  4  ";
console.log(inputString);

let inputStringTrim = inputString.trim();
console.log("After trim", inputStringTrim);

// Convert into number
let InputNumber = Number(inputStringTrim);
console.log(InputNumber);

console.log("+" == "+");

let sumArray = new Array(12, "+", 4);

if (sumArray[1] == "+") {
  console.log(sumArray[0] + sumArray[2]);
}

let newArray = inputString.split(" ");
console.log(newArray);

let newArrayTrimmed = inputStringTrim.split(" ");
console.log(newArrayTrimmed);

// let result = 23 - 32;

//=====================================================================================

//* Above is Thinking and Core Logic i try to build  - TRY AND ERRORs

//Below we make Proper Calc Logic

// input
let inputStr = "12 + b";

// Trim
inputStr = inputStr.trim();

// Array
let inputArray = inputStr.split(" ");
console.log(inputArray);

// convert to number
inputArray[0] = Number(inputArray[0]);
inputArray[2] = Number(inputArray[2]);

console.log(inputArray);

// operation base checking

let result;

// if (inputArray[1] == "+"){
//     return result = inputArray[0] + inputArray[2];
// } else if ( ) {

// }

switch (inputArray[1]) {
  case "+":
    result = inputArray[0] + inputArray[2];
    break;
  case "-":
    result = inputArray[0] - inputArray[2];
    break;

  //   default:
  //     break;
};

console.log(isNaN(result));
console.log(result);


