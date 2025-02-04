
// getting data from form
const form = document.querySelector('.form')

form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log(form.username.value)
})

// validating data form the user
