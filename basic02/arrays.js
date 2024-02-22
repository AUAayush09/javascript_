// Arrays

const myArray = [];


// Add element in array => which is holding the different type of dataType
myArray[0] = "Aayush";
myArray[1] = 1001;
myArray[2] = true;

// Refer to an array
console.log(myArray);
// length of an array
console.log(myArray.length)
// finding last element of an array
console.log(myArray[myArray.length-1]);

//adding the element
myArray.unshift(42);// adding randomly
myArray.push("School")
console.log(myArray)

// deleting te element in array

myArray.pop()
console.log(myArray)

//but if you wanted to see which element is going for pop ,  apply before the deleting element
const myLastitem = myArray.pop();
console.log(myLastitem);

const myArray2 = ["A", "B", "C", "D", "E", "F"];

const newArray = myArray2.slice(2, 5);

console.log(newArray);

// reverse array
const myArray3 = [2, 3, 4 ,5 ,79,98];
myArray3.reverse()

console.log(myArray3)
// Concat method join the two existing array

const myArrayA = ["A", "B", "C"] 
const myArrayB = ["D", "E", "F"];

const newArray1 = myArrayA.concat(myArrayB);

console.log(newArray1);
