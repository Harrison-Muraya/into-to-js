for(let i = 0; i<5; i++){
    console.log('loop in: ', i)
}

const names= ['harr', 'maur', 'kim']

for(let i=0; i<names.length; i++){
    console.log(i, ' : '+ names[i])
}

for(let i=0; i<names.length; i++){
    let html = `<div>${names[i]}</div>`
    console.log(html)
}