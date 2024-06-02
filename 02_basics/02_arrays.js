const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// to merge two arrays
// push, concat, spread


//console.log(marvel_heros);
//marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]) //flash

//const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros];

//console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_arr.flat(Infinity);
//console.log(real_another_array);


console.log(Array.isArray("Shrii"));
console.log(Array.from("Shrii"));
console.log(Array.from({name: "Shrii"})); // interesting => []

let score1 = 100;
let score2 = 200;
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]