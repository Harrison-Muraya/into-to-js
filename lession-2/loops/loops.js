
// for loop
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
console.log('end of for loop')

// while loop
console.log('strt of for while loop')

let i = 0
while(i<5){
    console.log('whole loop', i)
    i++
}
let j = 0
while(j<names.length){
    let html = `<div>${names[j]}</div>`
    console.log(html)
    j++
}

// do while loop
console.log('start of do while')

let k = 2
do
{
    let html = `<div>${names[k]}</div>`
    console.log(html)
    k++
}while(k<names.length);
