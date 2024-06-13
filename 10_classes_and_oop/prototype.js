// let myName = 'Shriyansh    ';

// console.log(myName.truelength);


let myHero = ['Thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'Sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shriyansh = function(){
    console.log('shriyansh is present in all objects');
}

let MyObject = {username: 'shrii'};

// MyObject.shriyansh(); 
// heroPower.shriyansh();
// myHero.shriyansh();

Array.prototype.printMe = function(){
    // console.log(`I was declared in an array`);
}

myHero.printMe();
// heroPower.printMe();

// inheritance

const user = {
    name: 'shri',
    email: 'shri@gmail.com'
}

const teacher = {
    makeVideo: true,
    // __proto__: user
}

const teachingAssistent = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingAssistent
}

teacher.__proto__.user;

// modern syntax

Object.setPrototypeOf(taSupport, teacher);


const myName = 'Shriyansh       ';
console.log(myName.length);

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

myName.trueLength();
"priyansh".trueLength();


