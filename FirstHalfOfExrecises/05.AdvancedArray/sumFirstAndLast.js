function sumFirstAndLast(array){
let firstN = array.shift()

let lastN = array.pop()

if(array.length < 2){
    lastN = firstN
}

console.log(Number(firstN) + Number(lastN))
}
sumFirstAndLast(['20'])