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



// 

const getTodos =(callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', ()=>{
        
        if(request.readyState ===4 && request.status ===200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        }
        else if (request.readyState===4){
            callback("could not load the data", undefined)
        }
            
    })
    request.open('GET','https://jsonplaceholder.typicode.com/todos/')
    request.send()
}



// getTodos((err, data)=>{
//     console.log('call back fired')

//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// callbback hell
const request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/todos/')
request.send()


const infp = JSON.parse(request.responseText)
getTodos(info, (err, data)=>[
    console.log(data)
])
