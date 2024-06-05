// if

const isUserLoggedIn = true;
const temp = 41;

// if(temp < 50){
//     console.log("Temp is less than 50");
// }else{
//     console.log("Temp is greater than 50");
// }
// console.log("executed");

// <,>,>=,<=,==,===,!=,!==

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// short hand notation

const balance = 1000;

// if(balance > 500) console.log("test"),console.log("ssss");

// if(balance < 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}