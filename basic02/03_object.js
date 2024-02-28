// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aayush",
    "full name": "Aayush Chand",
    [mySym]: "mykey1",
    age: 18,
    location: "patna",
    email: "aa@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(JsUser)

JsUser.email = "aa@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aa@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// string interpolation;
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());