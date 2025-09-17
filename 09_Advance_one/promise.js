const  promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //Db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "Chai", email:"chi@emaple.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error =true
        if(!error){
            resolve({username:"hitesh", password:"123"})
        } else{
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=> console.log("The promise  is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error =true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        } else{
            reject('Error: Javascript went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try{

    const response = await promiseFive
    console.log(response);

    } catch(error){
        console.log(error);
        
    }
    
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('E: ',error);
        
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))

// promise.all
// this is also there in promises
// Promise.all is a static method on the Promise object in JavaScript. It takes an iterable (like an array) of promises and returns a new promise that:

// Resolves when all the promises in the iterable resolve, with an array of their results.

// Rejects if any promise in the iterable rejects, with the reason of the first promise that rejects.

// ✅ Syntax:
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then(values => {
//   console.log(values); // [3, 42, 'foo']
// }).catch(error => {
//   console.error('One of the promises failed:', error);
// });
