function reverseArray(n,array){

    let newArr = []
    for(let i = 0;i < n;i++){
        newArr.push(array[i])
    }
    console.log(newArr.reverse().join(' '))


}
reverseArray(3, [10, 20, 30, 40, 50])
reverseArray(4, [-1, 20, 99, 5])
