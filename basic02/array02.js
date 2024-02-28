// array

 
/* 
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

----> shallow copies = A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made

----> deep copies = A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made
*/


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3) // [1,2]

console.log(myn1);
console.log("B ", myArr); // B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3) // splice manupulate the original array; 
console.log("C ", myArr); // C [0,4,5]
console.log(myn2); // [1,2,3]


 
//************************ part2 **************

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator;

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]// flat operator;

const real_another_array = another_array.flat(Infinity) // here the infinity is depth of an array;
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))// from convert the string or any data type here in array.
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));