function repeat(string,n){
    let sum = ''
    for (let index = 0; index < n; index++) {
        sum+= string
    }
    return sum
}
let result = repeat('abc','3')
console.log(result)
