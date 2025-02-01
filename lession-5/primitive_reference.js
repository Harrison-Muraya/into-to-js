// primitive
let age1 = 50
let age2 = age1

age2 = 60

console.log(age1)
console.log(age2)


// reference type
let user = {
    name: 'harrison', age: 39
}

let user2 = user

user.age = 60
console.log(user)
console.log(user2)