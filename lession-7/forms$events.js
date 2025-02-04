
// getting data from form
const form = document.querySelector('.form')
const feedback = document.querySelector('.feedback')


form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log(form.username.value)
// validating data form the user
    const username = form.username.value
    const userpattern =/^[a-zA-Z]{6,12}$/

    if(userpattern.test(username)){
        // feedback good infor
        feedback.textContent =  `that username is valid`
    }
    else{
        // feedback help
        feedback.textContent = `that username is not valid`
    }

})





const usernamee = 'harrrr'



// reguler exprssions
const patten = /[a-z]{6,}/
let results = patten.test(usernamee)
console.log(results)

if(results){
    console.log('test passed')
}
else{
    console.log('test failed')
}


