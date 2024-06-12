
const user = {
    username: 'Shriyansh',
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log('got user details from database');
        // console.log(`USername: ${this.username}`)
        console.log(this);
    }
}

// console.log(user['username']);
// console.log(user.loginCount);
// user.getUserDetails();
// console.log(this);


// Constuctor function (new)
// const promise = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Hii ${this.username}`);
    }

    return this;
}

const userOne = new User('shrii',12,true);
const userTwo = new User('Shri22', 6, false);
console.log(userOne.constructor);
// console.log(userTwo);
// userOne.greetings();