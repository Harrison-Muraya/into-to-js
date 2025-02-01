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

const people = ['joy','kim', 'mark']

// adding and changing page content

const h1 = document.querySelector('h1')
const paras = document.querySelectorAll('p')
const list = document.querySelector('.list')


paras.forEach((para)=>{
    para.innerText += ` this is new text from javascript`
})

people.forEach(person=>{
    list.innerHTML += ` <strong>${person}</strong>`
})

h1.innerText = 'wellcome '
list.innerHTML += `<li>me from in the  java </li>`

console.log(h1.innerText)


// getting and setting attribues

const link = document.querySelector('a')
link.setAttribute('href','https://www.youtube.com')
link.innerText = 'youtube'

const msg = document.querySelector('.list')
console.log(msg)
msg.setAttribute('class','success')
console.log(msg)  

//css
h1.style.color = 'teal'
h1.style.margin = '50px'
h1.style.fontSize = '60px'
