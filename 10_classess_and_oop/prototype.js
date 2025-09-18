// Javascript's default behaviour is prototypical behaviour
// javascript ko jab value nhimilti h toh ye jaldi se har nhi manti yejake fir use perticular value ko parent me dekhe giuse grandparent me dekeh gi and so on
// that's why it has prototypical behviour 

// arrow functions me this ka access nhi hota ku ki vha prototype aaajata h 
// new this classes inheritance prototypical ye sb protype se hi aate h 

// Array ------> Object -------> null
// String ------> Object -------> null
// Function------> Object --------> null
// At the end of the day we can say that everything in javascript contains properties inheritance from object
// function bhi object ko refernce krta h aur inhertial properties aa jati h usme object ki ye sb prototype ki vajah se ho pata h ku ki javascript parent grandparents pe jati rhti h jab tk use koi value na mil jae 


// Read about Flat Map also 




// let myName = 'hitesh   '
// let chaiChannel = 'chai  '


// console.log(myName.trueLength());


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function (){
    console.log(`Hitesh says hello`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()
// Once defiend in object and get accessed all over the objects are defiend or going to be defiend
//myHeros.heyHitesh() // it has been defined alll thearrays that are defiend or going to be defined
//heroPower.heyHitesh() ==> gives an error not defiend due to inheritance


// Inheritance  or Prototypical inheritance

const User = {
    name: 'Chai',
    email: 'Chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailabe: false
    
}

const TASupport = {
        makeAssignment: 'JS assignment',
        fulltime: true,
        __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
'icetea'.trueLength()