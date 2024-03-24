const user = {
  username: "Aayush",
  email: "1@g.com",

  getUserDetails : function(){
    console.log("got user details from database");
    console.log(`username is ${this.username}`)
  }
}

console.log(user.email)
console.log(user.getUserDetails());