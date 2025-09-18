class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username) // used in place of call
        this.email = email
        this.password =password
    }

    addCourse(){
        console.log(`Anew course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

//chai.addCourse()
chai.logMe()

const masalChai = new User("masalaChai")

masalChai.logMe()

console.log(chai instanceof User);

