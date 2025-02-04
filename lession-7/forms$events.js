
// getting data from form
const form = document.querySelector('.form')

form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log(form.username.value)
})

const username = 'harrrr'

// validating data form the user
const patten = /[a-z]{6,}/
let results = patten.test(username)
console.log(results)

if(results){
    console.log('test passed')
}
else{
    console.log('test failed')
}