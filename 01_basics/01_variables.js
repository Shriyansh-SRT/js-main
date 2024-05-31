const accountId = 1444213;
let accountEmail = "shri@gmail.com";
var accountPassword = "12345";
accountCity = "Brt";
let accountState;

// accountId = 876522; // cannot change
/*
kajhsdkjashdjkasdhjka 
no var- block and functional scope issues
*/
console.log(accountId);

accountEmail = "shri02@gmail.com";
accountPassword = "98765";
accountCity = "KTM";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);