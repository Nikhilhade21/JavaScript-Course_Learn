const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username:"chai", email: "chai@gmail.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username:"chai", email: "chai@gmail.com"})            
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((user)=>{
    console.log(user);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected "))

const promisefive = new Promise(function (resolve, reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username:"javaScript", password: "123"})            
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const responce = await promisefive
        console.log(responce);

    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUser(){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(responce);

//         const data = await responce.json()
//         console.log(data)        
//     } catch (error) {
//         console.log("E:", error)
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => console.log(error))
