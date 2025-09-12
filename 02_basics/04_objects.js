const blinderUser = new Object() // defiend dynamicaaly so sigleton object
//const blinderUser1 = {} // non singleton object
//but why next lectures

blinderUser.id = "123bd"
blinderUser.name = "dhksabdas"
blinderUser.isLoggedIn = false

//console.log(blinderUser1);

const rglrUser = {
    email: "kajsdna@gmail.com",
    fullname: {
        userFullName: {
            firsrname: "djkasda",
            lastname: "sdscds"
        }
    }
}
//console.log(rglrUser.fullname.userFullName.firsrname);

const obj1 = {1: "sdfds", 2: "dfsd"}
const obj2 = {3: "as", 4:"fvfv"}
const obj4 = {5: "sdf", 6:"wefew"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2 , obj4 ) // to combine objects

const obj3 = {...obj1, ...obj2} // easy
//console.log(obj3);

const Users = [
    {
        name:"sdvsv",
        email:"dsvdsv@djskcd"
    },
    {
        name:"sdvsv",
        email:"dsvdsv@djskcd"
    },
    {
        name:"sdvsv",
        email:"dsvdsv@djskcd"
    }
]

//console.log(Users[0].email);

// console.log(blinderUser);

// console.log(Object.keys(blinderUser));
// console.log(Object.values(blinderUser));
// console.log(Object.entries(blinderUser));


// console.log(blinderUser.hasOwnProperty("isLog")); // to find whether it has that property that is trying to be accessed


const course = {
    courseinstructor: "Abhishek",
    coursename:"js in hindi",
    price: "free"
}

const {courseinstructor: instructor} =course

console.log((instructor));

// {
//     "courseinstructor": "Abhishek",
//     "coursename":"js in hindi",
//     "price": "free"
// }


// [
//     {},
//     {},
//     {}
// ]




