const myObj = {
    js : "javaScript",
    cpp : "c++",
    rb : "ruby",
    swift: "Swift by apple"
}

// for (const key in myObj) {
//     console.log(key);
// }

for (const key in myObj) {
    // console.log(myObj[key]);
}

const arr = ["js", "python", "cpp", "ruby", "swift"];

for (const key in arr) {
    // console.log(key); // gives index
    // console.log(arr[key]); // gives values
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("FR", "France");
map.set("IN", "India"); 

// console.log(map);

// for (const [key, value] of map) {
//     // console.log(`key: ${key}, value: ${value}`);
// }

// for (const key in map) {
//     console.log(key);
// }