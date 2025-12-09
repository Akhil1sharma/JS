// string
const name = "Akhil";
const repoCount = 50;
// console.log(name + repoCount); // Akhil50 not the godd practice
console.log(`Hello ${name}, you have ${repoCount} repos`);

const gameName = new String("Pacman");
console.log(gameName); // Hello Akhil, you have 50 repos

console.log(gameName.toUpperCase());
console.log(gameName[0]); // P
console.log(gameName.length); // 6

const newString = gameName.slice(-3, 4);
console.log(newString); // Pac

const anotherString = gameName.substring(0, 3);
console.log(anotherString); // Pac

const str1 ="    Hello   ";
console.log(str1); // 11
console.log(str1.trim()); // Hello
//trim method removes the extra spaces from the string

const url = "www.akhildrive.com/profile.php";
console.log(url.replace("profile", "settings")); // www.akhildrive.com/settings.php
// replace method replaces the specified part of the string with the new value

//split
const url2 = "www.akhildrive/.com/profile/.php";  
const urlParts = url2.split("/");
console.log(urlParts); // [ 'www.akhildrive.com', 'profile.php' ]
// split method splits the string into an array based on the specified separator