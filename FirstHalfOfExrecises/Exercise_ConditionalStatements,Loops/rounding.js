function rounding(number,precision){

    number = Number(number);
    precision = Number(precision)
    
    if(precision > 15){
        precision = 15
    }
    let roundedNumber = number.toFixed(precision)
    let final = parseFloat(roundedNumber)
    console.log(final)

}
rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)