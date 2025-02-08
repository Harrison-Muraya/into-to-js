fetch('https://jsonplaceholder.typicode.com/todos/').then(responce =>{
    console.log("resolved",responce)
    return responce.json()
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log('error found', err)
})

