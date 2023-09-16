
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

console.log(user());