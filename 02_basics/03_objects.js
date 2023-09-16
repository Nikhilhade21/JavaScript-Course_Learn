// singleton 
// object.create

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Rajput",
    [mySym]: "mmyKey1",
    age: 18,
    location: "Jaipur",
    email: "nikhil@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "hitesh@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "hitesh@chatgpt.com"

// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
