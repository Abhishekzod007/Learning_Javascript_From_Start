

const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

const user2 = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// //console.log(user.getUserDetails());

// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()

function User(username, Logincount, isLoggedIn){
    this.username = username;
    this.Logincount = Logincount;
    this.isLoggedIn = isLoggedIn;
    
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        }
        return this
    }

const userOne = new User("abhi", 12, true)
const userTwo = new User('chai aur code', 13, false)
console.log(userOne.constructor);
//console.log(userTwo);

// new keyword 
// when we write new keyword then a new object is created 
// Constructor function called due to new keyword jo bhi arguments hote h uske andr vo aapko pack krke de deta h
//  this keyword h me jo bhi arguments likhe h usme inject ho jate h 
// fir function ke andr mil jate h sare arguments