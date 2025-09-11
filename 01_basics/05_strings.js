const name = "abhishek"
const repoCount = 14

// console.log(name + repoCount + " value")
// Do not practise this instead of this use ``

console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`);

const gameName =  new String('abhishek-77-com')

//console.log(gameName[0])
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('e'));


const newStr = gameName.substring(0,5)
console.log(newStr)

const newStrOne = gameName.slice(-14, -5)
console.log(newStrOne)

// Slice function

const newStr1 = "    dannn    "
console.log(newStr1)
console.log(newStr1.trim())

const url = "https://abhi.com/abhi%20chaudhary"

console.log(url.replace('%20', "-"));

console.log(url.includes('https'));


console.log(gameName.split('-')[1]);
