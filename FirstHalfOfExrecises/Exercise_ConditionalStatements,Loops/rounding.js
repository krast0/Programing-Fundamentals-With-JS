<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
rounding(10.5,3)