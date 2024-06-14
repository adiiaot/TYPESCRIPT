let number: number[] = [];
number[0] = 1;
number[1] = 2;
number[2] = 3;
number[4] = 4;
console.log(number);
/*
when you assign a data type of "number[]"
the variable can hold only integer values 
in the array, but when you remove the data type,
the array can hold any type of value including strings
as it gets assigned the "any" data type
*/

//HERE'S AN EXAMPLE OF THE ANY DATA TYPE
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 'a';
numbers[3] = 'b';
console.log(numbers);

//number.forEach(n => n.toExponential);
//TYPESCRIPT OFFERS CODE COMPLETION 