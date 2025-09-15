const myNumbers  = [1,2,3,4,5,6,7,8,9]

// const newnums = myNumbers.map((num) => num+10)
// console.log(newnums);

const newnums = myNumbers
                        .map((num)=> num*10)
                        .map((num)=> num+1)
                        .filter((num)=> num>= 50)
                        
console.log(newnums);
// map chaining can be done in this way                        
