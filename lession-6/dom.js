const para = document.querySelector('body > div > p')
const par = document.querySelectorAll('p')

console.log("this is from from SelectorAll",par)

par.forEach(pa=>{
    console.log(pa)
})

console.log(par)
console.log(para)

// other was of selector

const title = document.getElementById('title')
const error = document.getElementsByClassName('error')
console.log(title)
console.log(error)

