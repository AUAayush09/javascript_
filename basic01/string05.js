const name = "Aayush"
const repoCount = 5

// console.log(name + repoCount + " Value");

// use the below method for the concat ->
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Aayush-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); -> allows you to add new        properties and methods to strings.


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Aayush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Aayush.com/Aayush%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundari'))

console.log(gameName.split('-'));