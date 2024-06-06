
const myNums = [1,2,3,4,5,6,7,8,9,10];

// map

// const newnums = myNums.map( (num) => {
//      return num+10;
// } )

//  chaining
const newNums = myNums
                .map((num)=>{return num * 10;})
                .map((num)=>{return num+1})
                .filter((num)=>{return num>40})

console.log(newNums);