const list = document.querySelector('.todos')
const addForm = document.querySelector('.add')
const search = document.querySelector('.search input')

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">            
            <span>${todo}</span>            
            <i class="far fa-trash-alt delete"></i>            
        </li> 
    `
    list.innerHTML +=html
}
addForm.addEventListener('submit', e => {
    e.preventDefault()   
    const todo = addForm.add.value.trim(); 
    if(todo){
        generateTemplate(todo)
        addForm.reset()
    }   
})
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){    
    e.target.parentElement.remove();    
    }
})