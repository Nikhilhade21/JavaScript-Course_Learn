
// const coding =  ["py", "js", "rb", "java", "cpp"]

myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filtZ = myNums.filter( (num) => num > 4)
// console.log(filtZ);

const filtZ1 = myNums.filter( (num) => {
     return num > 4})
// console.log(filtZ1);

const newNum = []


myNums.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }   
});
console.log(newNum);

