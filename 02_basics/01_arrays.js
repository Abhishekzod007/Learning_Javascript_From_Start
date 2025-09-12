// array 

const myArr = [0,1,2,3,4,5]
// can contain any type of data like boolean , numbers together

const myHeroes = ["Shaktiman", "Naagraj"]

const myArr1 = new Array(1,2,3,4)

//console.log(myArr[1]);


// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(3) // time consuming becuase shifts all the elements one froward
//myArr.shift()

//console.log(myArr.includes(7))
//console.log(myArr.indexOf(4));

const newArr = myArr.join() // binds the array and make them string

//console.log(myArr);
//console.log(typeof newArr); 


// slice, splice

//console.log("A ", myArr)

const nA = myArr.slice(1,3) // 1 , 2 included index 3 excluded

//console.log(nA);
//console.log("B ", myArr);

const mA = myArr.splice(1,3)
//console.log(mA);
//console.log("C ", myArr);
// Splice manipulates the arrya and then new array becomes the removed part minus from the orignal part of the array and it also includes the index






