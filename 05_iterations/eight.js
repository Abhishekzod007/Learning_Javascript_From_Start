// reduce
const myNums = [1,2,3]

//const initialValue = 0;
// const myTotal = myNums.reduce(function (acc, currVal){
//     console.log(`acc:${acc} and  currVal: ${currVal}`);
             
//     return acc +currVal
// },0)

const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "jsCourse",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobileDev",
        price: 5999
    },
    {
        itemName: "DataScience",
        price: 12999
    },
    {
        itemName: "WebDev",
        price: 1999
    }
]

const FinalPrice = shoppingCart.reduce( (val , item) => (item.price + val) , 0 )

console.log(FinalPrice);
