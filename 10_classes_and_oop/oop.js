const user ={
    username: "nikhil",
    signedIn: true, 
    singCounts: 3,

    getUserDetails: function(){
        // console.log("gotuser user details from database")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}
// console.log(user.username)
// console.log(user.username.getUserDetails())
//console.log(this);

function User(username, LoginCount, isLoggedIn){
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new user("nikhil", 33, true)
const userTwo = new user("Rahul", 23, false)
console.log(userOne);
