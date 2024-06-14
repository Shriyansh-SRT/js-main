const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
// console.log(Math.PI);

// const myNewObj = Object.create(null)

const user = {
    username: 'Shri',
    score: 200,
    isLoggedIn: true,

    hello: function(){
        console.log('hello');
    }
}

// console.log(Object.getOwnPropertyDescriptor(user, "username"));

// Object.defineProperty(user, 'username', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(user, "username"));


for (const [key,value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}