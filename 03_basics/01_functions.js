
function saymyname(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");    
}

// saymyname()

// function addTwo(no1, no2){
//     console.log(no1+no2)
// }

addTwo(7, 9)

function addTwo(no1, no2){
    // let resault =no1 + no2
    // return resault
    return no1 + no2
}

// const result = addTwo(3, 4)
// console.log(result)

function user(userName = "sam"){
    if(!userName){
        console.log("please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(user());

function calculateCart(value1, value2, ...num1) {
    return num1
}
// console.log(calculateCart(144, 44, 54, 55, 5))

const user1 = {
    userName: "nikhil",
    price: 334
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}

//handleObject(user1)



const mynewArray = [100, 200, 145, 321]

function returnSecondvalue(arrayS){
    return arrayS[2]
}

// console.log(returnSecondvalue(mynewArray))
console.log(returnSecondvalue([654, 54, 643, 643, 234]))

