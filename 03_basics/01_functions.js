 function sayMyName() {
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("E")
    console.log("K")
 }

 //sayMyName()

//  function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
//  }

function addTwoNumbers(number1 , number2){
    // const result = number1 + number2;
    // return result
    return number1 +number2
 }

 const result = addTwoNumbers(3,5)

 //console.log("Result: ",result);

function LoginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
} 
//console.log(LoginUserMessage("abhishek"))
//console.log(LoginUserMessage("abhishek")) // undefined

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// ...parmeter is a rest operator used wehn there are many values coming asan input in the function
//console.log(calculateCartPrice(299,23,323,233,323));

const user = {
    username: "Abhishek",
    price: 323
}

function handlObject(anyObject){
  //  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handlObject({
    username: "sas",
    price: 77
});

const MyArray = [223,323,2323,5454,5445]

function ReturnArray(anyArr){
    return anyArr[3]
}
console.log(ReturnArray([2321,543,6,5656,432453]));
