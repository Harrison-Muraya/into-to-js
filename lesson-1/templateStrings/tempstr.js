const title ='Best reads of 2019'
const auther = 'harrison'
const likes = 10

// concatenate way
let results1 = 'the blog called  ' + title  + ' by ' + auther + ' has ' + likes + 'likes'
console.log(results1)

// template way
let results = `the blog called ${title} by ${auther} has ${likes} likes`
console.log(results)

// creating html templates
 let html = `<h2>${title}</h2>
            <p>by ${auther},</P>
            <span> this blog has ${likes} likes</span>`
console.log(html)
