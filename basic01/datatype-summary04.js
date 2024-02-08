// there are two type of dataType 1) primitive , 2) Non-primitive

// primitive -> string, Number, boolean, null, undefine, symbol,    bigInt
const str = "98" // string

const num = 99 //. number
const bool = true // boolean
const isOutsideTemp = null // null

let useremail; // undefined

const id = Symbol('231'); //symbol
const anotherId = Symbol('231')
console.log(id === anotherId);



// ***. Refernce (Non primitive)

// -> Array, -> function
// object,  -> function
// Function, -> object function

const heros = ["skatiman", "nagaraj", "doga"] // array
let myObj = {
    name: "Aayush",
    age: 21
}

const myFunction = function(){
  console.log("hello world!");
}

// we can know all the datatype by using " typeof" 

console.log(typeof (myFunction))