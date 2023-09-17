// for

// for (let i = 0; i <  11; i ++) {
//     console.log("2  *", i, " = ",i *2)
// }

// for (let i = 0; i <= 10; i++){
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//     console.log(`======== Table Of: ${i} ===========`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`inner loop value j: ${j} and inner loop i ${i}`);
//         console.log(`${i}  * ${j}  =  ${i*j}`);
//     }        
// }

// let myArray = ["Flash", "Batman", "Superman"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);    
// }


// break and continue

// for (let index = 1; index < 20; index++) {
//     console.log(`value of i is ${index}`);
//     if(index == 5){
//         break;
//     }
// }

for (let index = 1; index < 20; index++) {
    if(index == 5){
        //console.log(`Detected ${index}`);
        continue;
    }
    console.log(`value of i is ${index}`);
}
