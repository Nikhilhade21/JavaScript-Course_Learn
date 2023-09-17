var c = 200
let a = 10; //global scope

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner",a) //local scope
} 

console.log(a)

