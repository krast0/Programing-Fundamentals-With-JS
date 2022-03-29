<<<<<<< HEAD
function sumFirstAndLast(array){
let firstN = array.shift()

let lastN = array.pop()

if(array.length < 2){
    lastN = firstN
}

console.log(Number(firstN) + Number(lastN))
}
=======
function sumFirstAndLast(array){
let firstN = array.shift()

let lastN = array.pop()

if(array.length < 2){
    lastN = firstN
}

console.log(Number(firstN) + Number(lastN))
}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
sumFirstAndLast(['20'])