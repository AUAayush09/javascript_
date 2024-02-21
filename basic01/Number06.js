//Number

// An Integer is a whole number

const myNumber = 42;

// A number with decimal point is a float which is refrences 
//the "Floating point" 

const myFloat = 42.01;

const myString = "42";
// In below line the "Number" convert the string into Number type 
//just like "typecasting" do in java.

console.log(Number(myString) === myNumber);

//42 is similar like 42.0 ! Basically its is an floating point valve
console.log(myNumber==myFloat)


console.log(myString + 3); //gives an output 423
console.log(Number(myString) + 3); // gives an output 45

// the toString() method return the string representing the number
console.log(typeof Number.parseFloat(myString));

// NaN is an acroym for Not a Number.

console.log(isNaN("Aayush")) // output --> true