<<<<<<< HEAD
function evenAndOdd(params) {
    let sumForOdds = 0
    let sumForEvens = 0
    let dif = 0
    for (const n of params) {
        if(n % 2 === 0){
            sumForOdds += n
        }else{
            sumForEvens += n
        }

    }
        dif = sumForOdds - sumForEvens

    console.log(dif)
    
}
evenAndOdd([1,2,3,4,5,6])
console.log('---');
evenAndOdd([3,5,7,9])
console.log('---');
=======
function evenAndOdd(params) {
    let sumForOdds = 0
    let sumForEvens = 0
    let dif = 0
    for (const n of params) {
        if(n % 2 === 0){
            sumForOdds += n
        }else{
            sumForEvens += n
        }

    }
        dif = sumForOdds - sumForEvens

    console.log(dif)
    
}
evenAndOdd([1,2,3,4,5,6])
console.log('---');
evenAndOdd([3,5,7,9])
console.log('---');
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
evenAndOdd([2,4,6,8,10])