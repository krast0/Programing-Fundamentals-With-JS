<<<<<<< HEAD
function mergeArrays(array1,array2){
    let newArr = []
    for(let i = 0;i < array1.length;i++){
        if(i % 2 === 0){
            newArr.push(Number(array1[i]) + Number(array2[i]))
        }else{
            newArr.push(array1[i] + array2[i])

        }
    }
    console.log(newArr.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
=======
function mergeArrays(array1,array2){
    let newArr = []
    for(let i = 0;i < array1.length;i++){
        if(i % 2 === 0){
            newArr.push(Number(array1[i]) + Number(array2[i]))
        }else{
            newArr.push(array1[i] + array2[i])

        }
    }
    console.log(newArr.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
)