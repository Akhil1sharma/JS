let score = "66asd";

console.log(typeof score); // "string"

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // "number"
console.log(valueInNumber); // 66

score = null
console.log(typeof score); // "object"

// "33" = 33
//"33fsdf" = NaN
// true = 1
// false = 0
// null = 0
// undefined = NaN
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 = true
// 0 = false
// "0" = true
// "" = false
// "ashish" = true
// null = false
// undefined = false    

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber); // "string"
console.log(stringNumber); // "33"
