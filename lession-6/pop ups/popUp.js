const btn = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.close-popup')

close.addEventListener('click',()=>{
     popup.style.display ='none'
} )

btn.addEventListener('click',()=>{
    popup.style.display ='block'
})

popup.addEventListener('click',()=>{
    popup.style.display ='none'
})