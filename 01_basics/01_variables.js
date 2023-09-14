const accountId = 1444
let accountEmail = "nik@2gmail.com"
var accountPassword = "1234"
accountCity ="Jaipur"

//accountId = 2; // not allowed
accountEmail = "hc@gmail.com"
accountPassword = "1212"
accountCity = "lonar"
let accountState;

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
 */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])