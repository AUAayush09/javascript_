"use strict";// treat all code as newer version

let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean

const soo = 42; // foo is a number
const result = soo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421


console.log(typeof undefined);// undefined
console.log(typeof null); // object