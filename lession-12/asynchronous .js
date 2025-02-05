// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', ()=>{
//     console.log(request, request.readyState)
//     // if(request.readyState ===4)
//     //     console.log(request.responseText)

//     if(request.readyState ===4 && request.status ===200){
//         console.log(request.responseText)
//     }
//     else if (request.readyState===4){
//         console.log('could not fecth the data')
//     }
        
// })
// request.open('GET','https://jsonplaceholder.typicode.com/todos/')
// request.send()



const getTodos =(callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readyState)
        if(request.readyState ===4 && request.status ===200){
            // console.log(request.responseText)
            callback(undefined, request.responseText)
        }
        else if (request.readyState===4){
            // console.log('could not fecth the data')
            callback("could not load the data", undefined)
        }
            
    })
    request.open('GET','https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

console.log(1)
console.log(2)
console.log(3)

getTodos((err, data)=>{
    console.log('call back fired')

    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

console.log(4)
console.log(5)
console.log(6)
