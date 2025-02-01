const para = document.querySelector('body > div > p')
const parr = document.querySelectorAll('p')

console.log("this is from from SelectorAll",parr)

parr.forEach(pa=>{
    console.log(pa)
})

console.log(parr)
console.log(para)

// other was of selector

const title = document.getElementById('title')
const error = document.getElementsByClassName('error')
console.log(title)
console.log(error)

// adding and changing page content

const h1 = document.querySelector('h1')
const paras = document.querySelectorAll('p')

paras.forEach(para=>{
    para.innerText += `this is new text from javascript`
})

h1.innerText = 'wellcome '

console.log(h1.innerText)
