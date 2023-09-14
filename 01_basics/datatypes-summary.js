//primitive

//7 : string, number, Boolean, null, undefined, Symbol, Bigint

const score = 100  
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

//console.log(id === anotherId)

const bigNumber =3452154544445676354n;

//Reference (non-primitive type)

//Array, Objects, Function

// ======================================= memory =========================

//stack (primitive datatype), Heap (Non-premitive datatype)

let myYoutubeName = "Rahul"
let anotherName = myYoutubeName
anotherName = "chaiurcode"

console.log(myYoutubeName);
console.log(anotherName)

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userone

userTwo.email = "hitesh@google.com"

console.log(userone.email);
console.log(userTwo.email)