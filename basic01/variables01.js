const accountId = 883801
let accountEmail = "aayush@yahoo.com"
var accountPassword = "12212112"
accountCity = "Motihari"

//accountId = 43; => not allowed to change

accountEmail = "aa@aa.com"
accountPassword = "83280"
accountCity = "chandigarh"
console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity])

//.         "NOTES" 
// var, let, const =>
      /* 1. Always declare variables

      2. Always use const if the value should not be changed

      3. Always use const if the type should not be changed (Arrays and Objects)

      4. Only use let if you can't use const

      5. Only use var if you MUST support old browsers.( because of issue in block scope & functional scope)
      */