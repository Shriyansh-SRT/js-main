//var c = 300

let a  = 300;

if(true){
    let a = 10;
    const b = 20;
    //console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
//console.log(c); //prints 30

//console.log(a);


function one(){
    const username = "Shrii";

    function two(){
        const website = "YouTube";
        console.log(username);
        return website;
    }
    
    console.log(two());
    //console.log(website);
}

// one();

if(true){
    const username = "Shrii";
    if(username === "Shrii"){
        const website = " YouTube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

//console.log(addOne(2));
function addOne(num1){
    return num1++;
}


//addTwo(5);
const addTwo = function(num2){
    return num2++;
}

const addThree = (num) => {
    return num+3;
}

console.log(addThree(5));
