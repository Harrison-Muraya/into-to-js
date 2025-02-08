
// getting data from form
const form = document.querySelector('.form')
const feedback = document.querySelector('.feedback')
 const userpattern =/^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log(form.username.value)
// validating data form the user
    const username = form.username.value
   

    if(userpattern.test(username)){
        // feedback good infor
        feedback.textContent =  `that username is valid`
    }
    else{
        // feedback help
        feedback.textContent = `that username is not valid`
    }
})

// live feedback

form.username.addEventListener('keyup', e =>{
    // console.log(e.target.value, form.username.value)
    if(userpattern.test(e.target.value)){
        form.username.setAttribute('class','success')
        feedback.textContent =  `that username is valid`
    }
    else{
        // feedback help
        form.username.setAttribute('class','error')
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


