class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const shrii = new User('shrii');
// console.log(shrii.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'i@phone.com');
console.log(iphone);
iphone.logMe();
console.log(iphone.createId());