//var c =322
let a = 100   // Outside the block it is global scope
if (true) {
let a = 19
const b = 25
console.log("Inner: ", a)
var c = 33 // printing becuas var prints the values do not see scope 
} // scope

 console.log(a);
// console.log(b);
//console.log(c);


// browser me scopealag haur node env me scope alag h