<<<<<<< HEAD
function searchForANumber(array1,array2) {
    let modifiedArray = []
    let appears = []
    let [lengthOfArray,deleteFromArray,searchInarray] = array2
    //make new array with firstNum number of elements
    modifiedArray = array1.filter((x,i) => i < lengthOfArray)
    modifiedArray.splice(0,deleteFromArray)
    //search for how many time searched number appears in modified array
    appears = modifiedArray.filter(x => x == searchInarray)
    console.log(`Number ${searchInarray} occurs ${appears.length} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )
    searchForANumber([7, 1, 5, 8, 2, 7],
        [3, 1, 5]
=======
function searchForANumber(array1,array2) {
    let modifiedArray = []
    let appears = []
    let [lengthOfArray,deleteFromArray,searchInarray] = array2
    //make new array with firstNum number of elements
    modifiedArray = array1.filter((x,i) => i < lengthOfArray)
    modifiedArray.splice(0,deleteFromArray)
    //search for how many time searched number appears in modified array
    appears = modifiedArray.filter(x => x == searchInarray)
    console.log(`Number ${searchInarray} occurs ${appears.length} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )
    searchForANumber([7, 1, 5, 8, 2, 7],
        [3, 1, 5]
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
        )