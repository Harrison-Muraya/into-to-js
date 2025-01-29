const scores = [40,70,0,39,69,100,45,30]

for(let i=0; i<scores.length; i++){
    if(scores[i]<=40){
        continue
    }

    console.log('your score is: ', scores[i])
          

    if(scores[i]===100){
        console.log(' top student')
        break
    }
}