//LETS LIST A GROUP OF CONSTANTS IN JAVASCRIPT
// const small = 1;
// const medium = 2;
// const large = 3;

//BUT IN TYPESCRIPT WE CAN USE THE "enum" keyword to group them together
//and still assign values to them, look below

//Using the PascalCase
const enum size {small = 1, medium, large};
let mySize: size = size.medium;
console.log(mySize);