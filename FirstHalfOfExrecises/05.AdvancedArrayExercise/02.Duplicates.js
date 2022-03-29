<<<<<<< HEAD
function duplicates(array) {
    
    let filteredArray = array.filter((number,index)=> {
        return array.indexOf(number) === index
    })
    console.log(filteredArray.join(' '));
}
duplicates([7, 8, 9, 7, 2, 3, 4, 1, 2])
=======
function duplicates(array) {
    
    let filteredArray = array.filter((number,index)=> {
        return array.indexOf(number) === index
    })
    console.log(filteredArray.join(' '));
}
duplicates([7, 8, 9, 7, 2, 3, 4, 1, 2])
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
duplicates([20, 8, 12, 13, 4, 4, 8, 5])