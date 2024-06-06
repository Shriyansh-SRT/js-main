// for

// for(let i=0; i<10; i++){

// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for(let i=1; i<=10; i++){
    // console.log(`Outer loop ${i}`);
    for(let j=1; j<=10;j++){
        // console.log(`Inner loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArr = ["flash", "batman", "superman"];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// keywords: break, continue

for(let i=1; i<=20; i++){
    if(i==10){
        continue;
    }
    if(i==15){
        break;
    }
    console.log(i);
}