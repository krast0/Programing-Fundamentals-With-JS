function addAndSub(array){

    let sumArr1 = 0
    let sumArr2 = 0

    let newArr = []

for(let i = 0;i < array.length;i++){
    newArr.push(array[i])
    if(array[i] % 2 === 0){
        newArr[i] += i
    }else{
        newArr[i] -= i
    }
    sumArr2 += array[i]
}
for (const n of newArr) {
    sumArr1 += n
}

console.log(newArr);
console.log(sumArr2);
console.log(sumArr1);

}
addAndSub([5, 15, 23, 56, 35])
//console.log('---');
//addAndSub([-5, 11, 3, 0, 2])