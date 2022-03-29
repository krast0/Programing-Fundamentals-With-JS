function reception(array){
    let sum = 0
    let num = 0
    let hour = 1
    let studentCount = Number(array[3])
    //sum first 3 numbers from array to get studentsPerHour
    for(let i = 0;i < array.length - 1;i++){
        num = Number(array[i])
        sum += num
    }

    let originalsum = sum
    while(sum < studentCount){
        sum += originalsum
        hour++
        if(hour % 4 === 0){
            hour++
        }
    }
   console.log(`Time needed: ${hour}h.`)
}
reception(['5','6','4','20'])
console.log('---');
reception(['1','2','3','45'])
console.log('---');
reception(['3','2','5','40'])