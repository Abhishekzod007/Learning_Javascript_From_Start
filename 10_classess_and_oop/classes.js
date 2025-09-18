// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password =password
    }


    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scene
// this happens behind the scene that'swhy prototypes are very very important in javascript

function User2(username, email, password){
      this.username = username
      this.email = email
      this.password =password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User2.prototype.changeUserName = function(){
    return`${this.username.toUpperCase()}`
}

const Chai2 = new User2("chai", "chai@gmail.com", "123")
console.log(Chai2.encryptPassword());
console.log(Chai2.changeUserName());

