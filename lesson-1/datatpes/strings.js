// 1. strings
let email = 'harrison@gmail.com'
console.log(email);

// 2. concationation
let firstname = 'harrison';
let lastname = 'muraya';

let fullname = firstname + ' ' + lastname;
console.log("concatination ",fullname);

// getting characters
console.log("getting character",firstname[0]);

// getting string length

console.log("getting length ", firstname.length);

// string methods
console.log(firstname.toUpperCase()) 
let results1 = firstname.toLocaleLowerCase()
console.log(results1)

// finding position of a character

let index = email.indexOf('@')
console.log(index)

//common string methods
let results2 = email.lastIndexOf('i') //last "i" 
let results3 = email.slice(2,6)
let results4 = email.substring(2,10) // must be 12 char starting at index of 2
let results = email.replace('h','m')

 console.log(results)