//foreach
const coding =  ["py", "js", "rb", "java", "cpp"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (val) => (console.log(val)))

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language: "java",
        fileName: "java"
    },
    {
        language: "Python",
        fileName: "py"
    },
    {
        language: "JavaScript",
        fileName: "js"
    },
]

myCoding.forEach( (item) => {
    console.log(item.language);
})
