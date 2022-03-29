<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
leapYear(1900)