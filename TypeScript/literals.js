// Types and Literals
// Types are identified after the semi colon btn variable name and value 
// 1.Variable Declaration
// Number
var myAge;
// String
var myName;
// Boolean
var IamFemale;
// Array
var bootcamp10Students;
// the value of the arrays determines whats in the angle brackets
// Object
var bootcamp10Student;
// 2. Variable Definition [Assignment]
// This is how we create a number literal
myAge = 120;
// string literal
myName = "Kylie";
// boolean literal
IamFemale = true;
// Array literal
bootcamp10Students = ["Kylie", "Joseph", "Nina"];
// Object literal
bootcamp10Student = {
    name: "Arafat",
    age: 120
};
// 3. Using a Variable
console.log(myAge);
console.log(myName);
console.log(IamFemale);
console.log(bootcamp10Students);
console.log(bootcamp10Student);
// To run programs in Typescript, we compile to javascript by typing
// tsc space then the name of the file you're running, in this case literals.ts
// the shortcut to keep compiling to javascript is tsc literals.ts -w
