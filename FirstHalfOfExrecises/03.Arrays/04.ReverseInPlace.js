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
reverseInPlace(['a', 'b', 'c', 'd', 'e'])