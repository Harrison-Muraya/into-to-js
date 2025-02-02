const content = document.querySelectorAll('p')

content.forEach(p=>{
    if(p.textContent.includes('success')){
        p.classList.add('success')
    }
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
})


console.log(content)