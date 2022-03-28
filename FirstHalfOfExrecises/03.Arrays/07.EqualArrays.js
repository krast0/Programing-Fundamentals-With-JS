function equalArray(array1,array2) {
    let sum = 0
    let nums = 0
    let index = 0
    let isIndeticall = false

    for(let i = 0;i < array1.length;i++){
        nums = Number(array1[i])
        if(array1[i] === array2[i]){
            sum += nums
            isIndeticall = true
        }else{
            isIndeticall = false
            break;
        }
        index++
    }
    if(isIndeticall){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }else{
        console.log( `Arrays are not identical. Found difference at ${index} index`);
    }

}
equalArray(['10','20','30'], ['10','20','30'])
console.log('---');
equalArray(['1','2','3','4','5'], ['1','2','4','4','5'])
console.log('---');
equalArray(['1'], ['10'])