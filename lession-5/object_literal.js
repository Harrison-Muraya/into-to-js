const user = {
    name: 'harrison',
    age: 28,
    email: 'harrisonmuraya@gmail.com',
    blog: ['how to write java', 'c# is the best', 'c# is the best'],
}


let par = document.querySelector('.about')

let html = `hello my name is <strong>${user.name}</strong> my ag is ${user.age} this is my email ${user.email}`



par.innerHTML =html


console.log(user.name)
console.log(user['name'])
user.name = 'kimani'

console.log(user.name)
console.log(user.blog[1])
console.log(typeof user)