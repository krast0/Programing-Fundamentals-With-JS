function printSumAndEven(number){
    let Oddsum = 0
    let Evensum = 0
    let numToStr = String(number)
    for (let el of numToStr) {
        el = Number(el)
        if(el % 2 === 0){
            Evensum += el
        }else{
            Oddsum += el
        }
    }

console.log(`Odd sum = ${Oddsum}, Even sum = ${Evensum}`);
}
printSumAndEven(1000435)