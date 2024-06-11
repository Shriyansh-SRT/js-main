
// fetch(`https://something.com`).then().catch().finally() 
// promise create and promise consum


const promiseOne = new Promise(function(resolve, reject){
    // Do an asyn task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log(`Async task is completed`);
        resolve();
    }, 1000)

});
    
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Shrii", email: "SHrii@example.com"});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Shrii2", password: '123'});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

