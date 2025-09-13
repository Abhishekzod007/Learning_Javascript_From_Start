//var c =322
let a = 100   // Outside the block it is global scope
if (true) {
let a = 19
const b = 25
//console.log("Inner: ", a)
var c = 33 // printing becuas var prints the values do not see scope 
} // scope

 //console.log(a);
// console.log(b);
//console.log(c);


// browser me scope alag haur node env me scope alag h

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);

    }
   // console.log(website);
    two()
}

//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
       // console.log(username+website);
        
    }
  //console.log(website);
  
}

//console.log(username);


// ************* interesting ***************


//console.log(addone(5));

function addone(num){
return num+1
}

// both are types of function declaration

//addTwo(5)  => throw an error not intialized  
const addTwo = function(num){
    return num+2
}
