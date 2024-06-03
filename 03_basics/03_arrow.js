const user = {
    username: "Shriyansh",
    price: 999,

    welcome: function(){
        console.log(`Welcome ${this.username}`);
       // console.log(this);
    }

}

//  user.welcome();
//  user.username = "Shelby"
//  user.welcome();

// console.log(this);

// function one(){
//     let username = "Shri"
//     console.log(this.username);
// }

// one();


// const one = function(){
//     let username = "Shrii";
//     console.log(this.username)
// }

const one = () => {
    let username = "Shrii";
    console.log(this.username)
}

// one();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username: "Shriyansh"});

// console.log(addTwo(3,4));

const myArr = [2, 5, 3, 7, 8];

// myArr.forEach((item) => {
//     console.log(item++);
// })