const user = {
    name: 'harrison',
    age: 28,
    email: 'harrisonmuraya@gmail.com',
    location: 'nairobi',
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



const person = {
    name: 'harrison',
    age: 28,
    email: 'harrisonmuraya@gmail.com',
    location: 'nairobi',
    blog: ['how to write java', 'c# is the best', 'c# is the best'],
    login (){
        console.log('you are logged in')
    },

    logout (){
        console.log('you are logged out now')
    },

    logBlogs (){
        console.log('this is my blogs')
        this.blog.forEach(blog =>{
            console.log(blog)
        })
    },
}

person.login()
person.logout()
console.log(this)
person.logBlogs()

