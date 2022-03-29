<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
lastKNumbersSequence(6, 3)