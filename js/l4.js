let value = 3;
let negativeValue = -value;
console.log(negativeValue); // -3

console.log(2-2);
console.log(2 + (-2)); // 0
console.log(2*2);
console.log(4/2);
console.log(5%2); // 1
console.log(2**3); // 8 

let str1 = "Hello ";
let str2 = "World";
let fullStr = str1 + str2;
console.log(fullStr); // "Hello World"

console.log("1" + 2); // "12"
console.log(1 + "2");
console.log("1" + "2"); // "12"

let gamecounter = 100;
gamecounter ++; // gamecounter = gamecounter + 1
console.log(gamecounter); // 101

let points = 50;
++points;
console.log(points); // 51

console.log("2" > 1); // true   
console.log("02" > 1); // true

// THESE TYPE OF COMPARISONS CAN CAUSE BUGS IN YOUR CODE and create unecessary confusion
// console.log (null >= 0); // true
// console.log (null > 0); // false
// console.log (null == 0); // false

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

//primitive data type
 // 7 types these are call by value thse data doesn't comes from heap memory they give only the copy of the value so the reference is not changed
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigInt

//reference or non-primitive data type
// 1. object
// 2. array
// 3. function

const score = 100;
const scoreValue = 100.3    
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol("12345");
const anotherId = Symbol("12345");
console.log(id === anotherId); // false
// javascript is a dynamically typed language

const bigNumber = 1234567890123456789012345678901234567890n;


const heroes = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "ashish",
    age: 22,
    isLoggedIn: false
};

function myFunc(){
    console.log("hello world");
}
console.log(typeof myFunc); // "function"

console.log(typeof bigNumber); // "bigint"
console.log(typeof heroes); // "object"
console.log(typeof myObj); // "object"
console.log(typeof outsideTemp); // "object")
console.log(typeof myFunc); // "function"