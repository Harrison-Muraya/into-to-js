let password = 'ps@s'

if(password.length>=12 && password.includes('@')){
    console.log('password lenght is long  enought and strong')
}
else if (password.length>=8 || password.includes('@') && password.length>5){
    console.log('password lenght is long enought')
}
else
console.log('password lenght is short')