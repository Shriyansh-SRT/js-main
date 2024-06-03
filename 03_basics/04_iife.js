// Immediately Invoked Function Expressions (IIFE)

(function one(){
    // named iife
    console.log("DB connected");
})();

// ()()

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Shriyansh");

// const addName = (name) =>{
//     console.log(`${name}`);
// }

// addName("shriyansh");

