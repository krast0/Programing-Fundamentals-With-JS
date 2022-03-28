function lastKNumbersSequence(length,sum) {
    
let newArr = [1]

    for (let i = 0; i < length - 1; i++) {
        let sliced = newArr.slice(-sum)
        let result = 0
        for (let element of sliced) {
            result += element
        }
        newArr.push(result)

    }
  console.log(newArr.join(' '));

}
lastKNumbersSequence(6, 3)