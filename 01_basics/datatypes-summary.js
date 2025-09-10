// # Primitive or call by value

// 7 types : String, Number, Boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3432

const isLoggedIn = false
const outsideTem = null

let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4244124523412423543546n
// Reference (Non primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj","doga"]

let myObj = {
    name :"kjsds",
    age: 55,
}
//console.log(typeof myObj);

const myFunction = function(){
    console.log("sljsdn")
}