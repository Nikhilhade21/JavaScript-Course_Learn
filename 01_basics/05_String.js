const name = "hitesh"
const repocount = 56

//console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('nikhil_hade kkkk');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const myname = "    nikpa  "
console.log(myname.trim())

const url = "https://hitesh.com/hitesh%20chat"

console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))