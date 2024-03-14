const promisesOne = new Promise(function(resolve , reject){

    setTimeout(function(){
      console.log("task is completed");
      resolve();
    },1000)
  })
  // below ".then" have directly relation with the resolve 
  promisesOne.then(function(){
     console.log("promise is consumed")
  })
  
  
  // The direct method
  
  new Promise(function(resolve, reject){
  
    setTimeout(function(){
      console.log("task 2 completed")
      resolve();
    },1000)
  }).then(function(){
    console.log("promise 2 is consumed");
  })
  
  // passing the data in promise
  
  const promisesThree = new Promise(function(resolve , rejected){ 
    setTimeout(function(){
      resolve({username:"Aayush" ,email: "qwe@y.com"})
    },1000)
  })
  
  promisesThree.then(function(user){
    console.log(user);
  
  })
  
  const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = false
      if (!error) {
        resolve({username: "Aayush", password: 12468}) 
      }
      else{
        reject("error: something went wrong")
      }
    },1000)
  })
  
  promiseFour.then((user) =>{
    console.log(user);
      return user.username
  }).then((username)=>{
    console.log(username);
  }).catch(function(error){
    console.log(error);
  }).finally(()=> console.log("The promise is either resolved or rejected"))
  
  
  
  const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true
      if (!error) {
        resolve({username: "JS", password: 12468}) 
      }
      else{
        reject("error: JS went wrong")
      }
    },1000)
  })
   // when the error = true  =>This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch()
  // async function consumePromisefive(){
  //   const response = await promiseFive
  //   console.log(response)
  // }
  // consumePromisefive()
  
  async function consumePromisefive(){
    try {
      const response = await promiseFive
    } catch (error) {
      console.log(error)
    }
  }
  consumePromisefive()
  
  // async function getAllUser(){
  //    try {
  //     const response = await fetch ("https://jsonplaceholder.typicode.com/users")
  //    const data = await response.json();
  //    console.log(data); 
  //    } catch (error) {
  //     console.log("e:", error);
  //    }
  // }
  // getAllUser()
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) =>{
    return response.json()
  
  })
  .then((data) =>{
    console.log(data);
  
  })
  .catch((error) => console.log('e:',error))