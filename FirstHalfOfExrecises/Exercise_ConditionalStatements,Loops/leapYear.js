function leapYear(number){
    let isLeap = false

    if(number % 4 === 0 && number % 100 !== 0){
        isLeap = true
    }else if(number % 400 === 0){
        isLeap = true
    }else{
        isLeap = false
    }

    if(isLeap){
        console.log('yes')
    }else{
        console.log('no')
    }
}
leapYear(1984)
leapYear(2003)
leapYear(4)
leapYear(1900)