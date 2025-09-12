// singleton
//Object.create is a constructor method to create obj

// Object literals

const mySym = Symbol("key1")

const  JsUser = {
    name: "Abhi",
    "full name": "Abhishek Chaudhary",
    age: 20,
    [mySym]:"Mykey1",
    location: "Rawatsar, Hanumangarh",
    email: "abhishek@sarv.ai.com",
    isLoggedIn: false,
    LastLoggedInDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( typeof JsUser[mySym]);




//console.log(Object.getOwnPropertySymbols(JsUser)); // Shows an array of symbol keys


JsUser.email = "abhishek@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "abhsiehk@google.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello bhai kitna kam kiya aaj");
    return "Kam puch liya ";
}

JsUser.greeting_two = function(){
    console.log(`hello bhai ${this.name} kitna kam kiya aaj`);
    return "kam puch lia gya "
}

console.log(JsUser.greeting());
console.log(JsUser.greeting_two());
//JsUser.greeting() this will not return any undefine and prints the greeting function



