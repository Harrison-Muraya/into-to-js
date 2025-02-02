const items =document.querySelectorAll('li')
const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    console.log('clicked button')
})

items.forEach(item =>{
    item.addEventListener('click', e =>{
        console.log('clicked me')
        console.log(e.target)
        e.target.style.textDecoration = 'line-through'
    })
})