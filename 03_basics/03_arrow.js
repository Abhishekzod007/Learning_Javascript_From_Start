const user = {
    username: "hitesh",
    price: 899,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sas"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "h9tes"
//     console.log(this.username); // this is used for object accessing only not for function  // undefined
    
// }
// chai()

// const chai = function(){
//     let username = "h9tes"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "h9tes"
    console.log(this);
}
//chai()
// so next time if interviewer asks that what is the difference between normal function and arrow function then do not take refernce to this keyword it doest not work for any of the function works only for object 

// const addTwo  = (num1,num2) => {
//     return num1+num2 // explicitely return 
// }
//const addTwo  = (num1,num2) => num1+num2  // implicit return 
//const addTwo  = (num1,num2) => (num1+num2)

const addTwo  = (num1,num2) => ({username: "hitesh"})
console.log(addTwo(3,4));


// const Arr = [2,2,4,5,5]

// Arr.forEach()