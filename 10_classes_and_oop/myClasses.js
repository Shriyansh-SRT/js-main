// ES6 

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    showUsername(){
        console.log(`username is ${this.username}`)
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('Shriyansh', 'shri@gmail.com','shri123');
// console.log(user1);
// user1.showUsername();
// console.log(user1.changeUsername());

// behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}ababa`;
}

user.prototype.changeToUpper = function(){
    return `${this.username.toUpperCase()}`;
}

const shrii = new user('Shriyansh', 'Shri@apple.com', 'shrii12');
console.log(shrii);
console.log(shrii.encryptPassword());
console.log(shrii.changeToUpper());