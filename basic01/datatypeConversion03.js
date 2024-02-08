 let score = 88

 console.log(typeof score);// number
 console.log(typeof(score))// number

 let score2 = "88"

 console.log(typeof score2);// its gives the output of string
 console.log(typeof(score2))// string

 let valueInNumber = Number(score2);
 console.log(valueInNumber); // 88
 console.log(typeof (valueInNumber));// Number

 let score3 = "88aeb"

console.log(typeof (score3)) // string
 let valueInNumber2 = Number(score3);
 console.log(typeof (valueInNumber2));// number
 console.log(valueInNumber2);// NaN

 let score4 = null;

console.log(typeof score4);// object
 let valueInNumber3 = Number(score4);
 console.log(typeof (valueInNumber3));// number
 console.log(valueInNumber3);// 0

 // for 1 => true. & for 0 => false
 // empty space "" => false
 // for string "Aayush" => true

 let numberaString = 89;

 let stringNumber = String(numberaString);
 console.log(stringNumber);
 console.log(typeof stringNumber);