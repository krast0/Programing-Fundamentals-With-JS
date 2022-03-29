<<<<<<< HEAD
function bomb(array,specialBomb) {
    let [specialNumber,power] = specialBomb
    let triggerCount = array.filter((x,) => x == specialNumber).length
    let sum = 0
for (let i = 0; i < triggerCount; i++) {
    if(array.includes(specialNumber)){
        if(array.indexOf(specialNumber) <= 0){
            array.splice(array.indexOf(specialNumber), power + 1)
        }else{

    array.splice(array.indexOf(specialNumber) - power , power + power + 1)
        }
    }else{
        break;
    }
}   


    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i])
        
    }
    console.log(sum);
}


bomb([1,5,1],
    [5, 0]
    )

=======
function bomb(array,specialBomb) {
    let [specialNumber,power] = specialBomb
    let triggerCount = array.filter((x,) => x == specialNumber).length
    let sum = 0
for (let i = 0; i < triggerCount; i++) {
    if(array.includes(specialNumber)){
        if(array.indexOf(specialNumber) <= 0){
            array.splice(array.indexOf(specialNumber), power + 1)
        }else{

    array.splice(array.indexOf(specialNumber) - power , power + power + 1)
        }
    }else{
        break;
    }
}   


    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i])
        
    }
    console.log(sum);
}


bomb([1,5,1],
    [5, 0]
    )

>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
