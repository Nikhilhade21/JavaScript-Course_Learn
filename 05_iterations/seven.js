const myNubers = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10]

// const newnums = myNubers.map( (num) => num + 10)

const newNums1 = myNubers
         .map( (num) => num * 10 )
         .map( (num) => num + 1)
         .filter( (num) => num >= 40)

console.log(newNums1)