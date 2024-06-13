class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const shrii = new Teacher('shrii', 'tshriyansh@apple.com', 'shri123');
console.log(shrii);
shrii.logMe();
shrii.addCourse();

const bhaskar = new User('bhaskar');

// bhaskar.addCourse();
bhaskar.logMe();

console.log(shrii instanceof Teacher);
console.log(shrii instanceof User);
console.log(Teacher instanceof User);
console.log(User instanceof Teacher);
