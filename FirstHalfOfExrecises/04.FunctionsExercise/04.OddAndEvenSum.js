<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
printSumAndEven(1000435)