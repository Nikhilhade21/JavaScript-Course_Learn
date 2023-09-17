const user = {
    userName: "hitesh",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website `)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this)

function chai(){
    console.log(this)
}

// chai()

const chai1 = function() {
    let userNmae = "nikhil"
    console.log(this.userName);
}

// chai1()

//arrow function

const chai2 = () => {
    let userNmae = "nikhil"
    console.log(this.userName);
}
 
// chai2()

// const addTwo = (n1, n2) => {
//     return n1 + n2
// }

// const a = (nu1, nu2) => nu1 + nu2

// const a = (nu1, nu2) => (nu1 + nu2)

const a = (nu1, nu2) => ({username: "nikhil"})

console.log(a(3, 5))

