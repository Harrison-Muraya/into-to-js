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

const area = function(raduis=0){
    let area = 3.14 * raduis**2
    return area
}
console.log(`the area is ${area(7)}`)