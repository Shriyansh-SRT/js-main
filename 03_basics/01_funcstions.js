
// function greet(){
//     console.log("Hello, good morning!");
// }

const greet = function (){
    console.log("Hello, good morning!");
}

//greet();

function addTwoNumbers(a,b){
    
    // let result = a + b;
    // return result;

    return a + b;
}

let sum = addTwoNumbers(2,3);
//console.log(sum);


function loginUserMessage(usernaame = "sam"){
    if(!usernaame){
        console.log("Please enter the username");
        return 
    }
    return `${usernaame} just logged in`
}

//console.log(loginUserMessage("Shriyansh"));
// console.log(loginUserMessage()); // undefined

//... rest operator
function calculateCartPrice(value1, value2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(400,300,550,270,600));

const user = {
    username: "Shrii",
    prices: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Shrii1",
    price: 999
});

const myNewArr = [200, 400, 100, 600];

function returnSecondVal(arr){
    return arr[1];
}

// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([100,200,300,500]));

