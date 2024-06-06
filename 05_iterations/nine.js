// reduce

const myNums = [1,2,3];

const myTotal = myNums.reduce( (acc, currval) => {
    console.log(`Acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 2);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "mob dev course",
        price: 3000
    },
    {
        itemName: "DS course",
        price: 12000
    }
]

const totalPrice = shoppingCart.reduce( (acc, currVal) => {
    return acc + currVal.price;
},0)

console.log(totalPrice);