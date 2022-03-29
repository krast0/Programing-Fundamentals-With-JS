<<<<<<< HEAD
function reverseInPlace(array){
    let newArr = []
    let lastIndex = array.length - 1
    for(let i = 0;i < array.length / 2;i++){
       let k = lastIndex - i
       let temp = array[i]
        array[i] = array[k]
        array[k] = temp
    }
    console.log(array.join(' '))




}
=======
function reverseInPlace(array){
    let newArr = []
    let lastIndex = array.length - 1
    for(let i = 0;i < array.length / 2;i++){
       let k = lastIndex - i
       let temp = array[i]
        array[i] = array[k]
        array[k] = temp
    }
    console.log(array.join(' '))




}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
reverseInPlace(['a', 'b', 'c', 'd', 'e'])