const Marvel_Heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//Marvel_Heroes.push(dc_heroes)
// push pushes the other array in the exsisting array
// console.log(Marvel_Heroes) // Arrays can  take anything like object or string or whole array as an input or merge
// console.log(Marvel_Heroes[3][2])

//const all_heros = Marvel_Heroes.concat(dc_heroes) // concat pushes the arrayin the exsisting array but to show output have to make another array then print that then it mergers both arrays in new array
//console.log(all_heros);

//const all_new_heros = [...Marvel_Heroes, ...dc_heroes]
// it is better also requires new array for storing but it cn merge more than 2 arrays at a time instead of concat
//console.log(all_new_heros);

const A_new_Array = [1,2,3,[4,5,5], 5,6,[3,5,[3,6]]]

const An_Array_that_flattend = A_new_Array.flat(Infinity)
// instead of infinty we should mention depth when we are making a production level project
//console.log(An_Array_that_flattend);

console.log(Array.isArray("abhi"));
console.log(Array.from("abhi"));
console.log(Array.from({name:"abhi"})); // interesting becuase it asks you that on what basis i have to convert this object into array value basis or key basis

let s1 = 23
let s2 = 34
let s3 = 43

console.log(Array.of(s1,s2,s3));

// learn about these isarray from object of


