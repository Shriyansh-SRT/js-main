const tinderUser = new Object() // singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sammy@gmail.com",
    fullname: {
        userFullname: {
            firstName: "shrii",
            lastName: "timsina"
        }
    }
}

//console.log(regularUser.fullname.userFullname.firstName);


// combining objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const finalObj = {obj1, obj2};

//const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

const finalObj = {...obj1, ...obj2};
//console.log(finalObj);


const users = [
    {
        id: 1,
        email: "shri@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"))