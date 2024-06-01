const fname = "shriyansh";
const repoCount = 50;

//console.log(fname + repoCount + " Value");

// use ${}
console.log(`Hello, my name is ${fname} and my repo count is ${repoCount}`);

const gameName = new String("Shri-123");
const name = new String("Hero")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

const newName = gameName.substring(0,4);
console.log(newName);

const anotherString = gameName.slice(-3);
console.log(anotherString);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(1));
//console.log(gameName.indexOf("r"));
// console.log(gameName.slice(0,4));


const newString1 = "    shrii    ";
console.log(newString1.length);
console.log(newString1.trim().length);
//trimStart, trimEnd

const url = "https://shrii.com/shri%20timsina";
console.log(url.replace("%20","-"));

console.log(url.includes("%20"));

let myArray = gameName.split("");
console.log(myArray); 

console.log(gameName.concat(" ", name));