let ninjas = ['shaun','harr','kim' ]

console.log(ninjas)

ninjas[1]='joy' //overriding
console.log(ninjas[1]) // indexing

let ages = [20,30,70,12]
let random = ['jane', 'mark', 40, 12]

console.log(ages)
console.log(random)

console.log(ninjas.length)

// arrays methods
let results1 = ninjas.join(',') 
let results2 = ninjas.indexOf('harr')
let results3 = ninjas.concat(['maina','kinagangi'])
let results4 = ninjas.push('mario')
let results5 = ninjas.pop()
console.log(results5)
