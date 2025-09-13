const userEmail = []

if(userEmail){
    console.log("Got your email");
    
} else {
    console.log("Do not have user email");
    
}

// falsy values

// false , 0 , -0, BigInt 0n,  "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length ===0){
//     console.log("Array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }



// Nullish Coalescing Operator (??) : null  undefined
// if errors  are there so to neglect those use tis
let cal1;
//val1 = 5 ?? 10
//val1 = null ??  10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 12


console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ?console.log("less than 80") : console.log("more than 80");

