function spiceMustFlow(startingYeild){

    let extractedSpices = 0
    let yeildConsuptiun = 0
    let counter = 0
    while(startingYeild >= 100){
        yeildConsuptiun = startingYeild - 26
        startingYeild -= 10
        extractedSpices += yeildConsuptiun
        counter++
    }

    if(extractedSpices >= 26){
        extractedSpices -= 26
    }

    console.log(counter)
    console.log(extractedSpices)
}
spiceMustFlow(111)
console.log('---');
spiceMustFlow(450)