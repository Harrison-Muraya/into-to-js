// function declaration
function great(){
    console.log(' am in function')
}

// function expression
const newgreating = function(){
    console.log('am good')
}

// calling a function
great()
newgreating()

// parametas and arguments
const speak = function(name='harr', time='night'){
    console.log(`good day ${name}`)
}

speak('kamau', 'morning')


// functions with return type

const area1 = function(raduis=0){
    let area = 3.14 * raduis**2
    return area
}
console.log(`the area is ${area1(7)}`)

// arrow functions
const area = (radius)=>{
    return 3.14 * radius**2
}

console.log('calling from arrow function ', area(14))


const greating = () => 'hello, world'
console.log('from arrow function mini: ', greating())

// callback functions
let people = ['harrison','musa','yakub', 'kasongo','wamunyoro']
// people.forEach(function(person){
//     console.log(person)
// })


const logperson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}

people.forEach(logperson)

// same as the top

people.forEach((people,index)=>{
    console.log(`this is form my brain ${index}: ${people} are you oky`)
})