const accountId = 144553
let accountEmail = "akhil@google.com"
var accountCity = "jaipur"
/*
prefer not to use var as it is function scoped(because of issue in block scope and functional scope)
*/
let accountState = "Rajasthan"

accountEmail = "2"
accountCity = "bengaluru"
accountState = "Karnataka"

console.log(accountEmail);
console.table({accountId, accountEmail, accountCity, accountState});
let acoountCountry;

console.table({acoountCountry});