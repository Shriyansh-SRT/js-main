// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 22);

//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2024, 0, 22, 5 ,3);
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2024-02-12");
let myCreatedDate = new Date("02-14-2023");

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})