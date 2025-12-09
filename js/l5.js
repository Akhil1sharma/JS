//stack and heap memory 
// whenever we use the stack memory you get the copy of declared value but in heap memory you get the reference of the value
//whenever we use the heap memory the reference is stored in the  memory

let youTubeName ='Akhil drive'
let anotherYouTubeName = "youTubeName"

console.table({youTubeName, anotherYouTubeName}); // { youTubeName: 'Akhil drive', anotherYouTubeName: 'Akhil drive' }

// objects are stored in heap memory
let user ={
    name: 'Akhil',  
    age: 22,
    email: 'akhil@example.com'
}
let anotherUser = user; // here we are assigning the reference of user object to anotherUser
console.log(anotherUser.email); // { name: 'Akhil', age: 22, email: ' 
console.log(user.email); // { name: 'Akhil', age: 22, email: '