// for of

// ["", "", ""]
// [{}, {}, {}]

const myArr = [1,2,3,4,5];

for (const num of myArr) {
    // console.log(num);
}

const greetings = "hello hi";

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("FR", "France");
map.set("IN", "India"); // no duplication, in order

console.log(map);

for (const [key,value] of map) {
    // console.log(key, ': ', value);
}

const myObj = {
    "game1" : "NFS",
    "game2" : "spiderman"
}

for (const key of myObj) {
    // console.log(key);////  not iterable
}

