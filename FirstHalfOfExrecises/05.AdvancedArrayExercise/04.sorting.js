<<<<<<< HEAD
function solve(numbers) {
    let big = numbers.sort((a, b) => b - a).slice(0,numbers.length / 2)
   // console.log(big)
    let small = numbers.slice(numbers.length / 2).reverse()
   // console.log(small)
    let result = [];
    for (let i = 0; i < big.length; i++) {
      result.push(big[i], small[i])
    }
     console.log(result.join(' '))
  }
=======
function solve(numbers) {
    let big = numbers.sort((a, b) => b - a).slice(0,numbers.length / 2)
   // console.log(big)
    let small = numbers.slice(numbers.length / 2).reverse()
   // console.log(small)
    let result = [];
    for (let i = 0; i < big.length; i++) {
      result.push(big[i], small[i])
    }
     console.log(result.join(' '))
  }
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);