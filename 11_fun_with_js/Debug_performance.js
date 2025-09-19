// const arr = []
// %DebugPrint(arr)

// continous , Holey

// SMI(small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
// Packed_SMI_Elements ====> continuous
const arrThree = [1,2,,3,4,5]
// Holey
 
arrTwo.push(6.0) // once if we do that then there is no going back ven if we dlete that float or double vlaue still thecompiler doest not do optmisation in that way and it will remian packed_double_element array
// it will never go back to packed_SMI_element array type
// Packed_Double_Elements 

arrTwo.push('7')
// Packed_Elements

arrTwo[10] = 11
// Holey_Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]); // undefined and these are costly operations


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// ====> Very expensive operation this is becasue after checking bound ku ki javascript khbi har nhi manti until unless ki vo puriparent grandprents sbko depth me na check kr le
// Then ye array ke andrd check krri and then itcheck ki arr defined h uske prototype me toh nhi h khi value then itcheck ki chlo array me nhi toh Object ke prototype me toh nhi chli gyi vale 
// That's why it is very expensive operation 


const arrFour = [1,2,3,4,5]

console.log(arrFour[2]);

// SMI_elements > Double> Packed
// H_SMI > H_Double > H_packed

const arrFive = new Array(3)
// just 3 holes Holey_SMI_Elements

arrFive[0] = '1' // Holey_Elements
arrFive[0] = '2'  // Holey_Elements
arrFive[0] = '3'  // Holey_Elements

const arr5 = []
arr5.push('1') // Packed_Elements
arr5.push('2') // Packed_Elements
arr5.push('3') // Packed_Elements


const arrSix =[1,2,3,4,5]

arrSix.push(NaN) // Infinity instad of NaN  Packed_Double bn gya ye krne se

// for , for-of, forEach
