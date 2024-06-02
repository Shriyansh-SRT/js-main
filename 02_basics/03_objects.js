// singleton

// object declaration: literals and constructor

// object lietrals

//Object.create 

const mySym = Symbol("key1");

const jsUser = {
    name: "Shriyansh",
    "full name": "Shriyansh Raj Timsina",
    [mySym]: "myKey1",
    age: 21,
    location: "brt",
    email: "shri@gmail.com",
    loggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser["email"] = "shrii3@gmail.com";
//Object.freeze(jsUser);
jsUser["email"] = "shrii@yahoo.com";
//console.log(jsUser);

jsUser["greeting"] = function(){
    console.log("Hello JS User!");
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

//console.log(jsUser.greeting());
//console.log(jsUser.greetingTwo());
 