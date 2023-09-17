// Immediately Invoke Function Experssion (iife)

(function chai(){
    //named iife (name is defined of function)
    console.log(`database is connected`)
})();

((name1) => (console.log(`${name1} database is connected`)))('nikhil'); 
// unnamed iife

