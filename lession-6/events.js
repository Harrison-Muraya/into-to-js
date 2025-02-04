const items =document.querySelectorAll('li')
const btn = document.querySelector('button')
const ul = document.querySelector('ul')


// adding an element

btn.addEventListener('click', ()=>{
    const li = document.createElement('li')
    li.textContent = 'added to the list'
    ul.prepend(li)
    // e.target.remove()
    console.log('clicked button')
})

items.forEach(item =>{
    item.addEventListener('click', e =>{
        console.log('clicked me')
        console.log(e.target)
        // e.target.style.textDecoration = 'line-through'
        e.target.remove()
    })
})