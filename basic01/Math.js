// Math

// The Math namespace object contains static properties and methods for mathematical constants and functions.

 //console.log(Math.min(9 , Math.min(1,3)))

//For creating random value

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random()); // its gives only number btw 0 to 1 (1 not included).

// from 1 to 10.

console.log(Math.floor(Math.random() * 10) + 1 );
console.log(Math.floor(Math.random() * 10) + 1 );
console.log(Math.floor(Math.random() * 10) + 1 );// if we do not add 1 , then we get number from 0 to 9.

/* Choose Math.floor()
NOT Math.ceil()
for generating a random number from 1 to 10

Why?

Math.random) returns a range from 0 to 1
that includes 0 but not 1.
-->
Math.ceil(Math.random) * 10) has a chance of resulting in zero.
Math. floor ((Math.random() * 10) + 1) is the way to go! */


// coding challenge
console.log(typeof "Aayush");
console.log('Aayush'.charAt(3));
console.log(Math.floor(Math.random() * 3) + 1);
console.log(Math.floor(Math.random() * 3 + 1));

// This will work for all name 
// & all length 
const anyName = "Aayush";
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)))