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


// ***************************************************************


//   Stack memory(primitive)  &  heap memory(non-primitive)


// stack memory
let userOne = "abhash@google.com"

let userTwo = userOne
userTwo = "chunnu@google.com"
console.log(userOne);
console.log(userTwo);

// heap memory

let value1 = {
  email: "a@a.com",
   upi: "a@ybl"
}
let value2 = value1
value2.email = "aa@a.com"
console.log(value1);
console.log(value2);

/*
The stack is used to store static data, whereas the heap is used to store dynamic data. The stack contains references to the objects in a heap. JavaScript also uses a garbage collector to deallocate unused memory from the heap
*/