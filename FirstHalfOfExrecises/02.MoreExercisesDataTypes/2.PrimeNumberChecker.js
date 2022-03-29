<<<<<<< HEAD
function primeNumChecker(number){

let isPrime = true
if(number === 1){
    isPrime = false
}
else if(number > 1){

    for(let i = 2;i < number ;i++){
        if(number % i === 0){
            isPrime = false
            break;
        }
    }
if(isPrime){
    console.log('true')
}else(
    console.log('false')
)
}else{
    console.log('false')
}

}
=======
function primeNumChecker(number){

let isPrime = true
if(number === 1){
    isPrime = false
}
else if(number > 1){

    for(let i = 2;i < number ;i++){
        if(number % i === 0){
            isPrime = false
            break;
        }
    }
if(isPrime){
    console.log('true')
}else(
    console.log('false')
)
}else{
    console.log('false')
}

}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
primeNumChecker(7)