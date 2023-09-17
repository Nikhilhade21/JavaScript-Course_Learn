var c = 200
let a = 10; //global scope

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
   // console.log("inner",a) //local scope
} 

// console.log(a)

function one(){
    const name = "nikhil"
    function two(){
        const website = "nik.com"
        console.log(website, name);
    }
    // console.log(website);
    two()
}
// one()




function addone(value){
    return value + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
console.log(addone(5))
