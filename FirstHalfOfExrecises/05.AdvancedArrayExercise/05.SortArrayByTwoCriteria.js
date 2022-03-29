<<<<<<< HEAD
function twoCriteria(array) {
    function sortArrayByLength(arr){
    return arr.sort((a,b) => a.length - b.length)
    }

    function sortByAscii(arr){
     return arr.sort((a,b) => a.localeCompare(b))
    }
let sortedArray = sortArrayByLength(sortByAscii(array))
console.log(sortedArray.join('\n'));

    
    

    

   
}
twoCriteria(['alpha', 'beta', 'gamma'])
=======
function twoCriteria(array) {
    function sortArrayByLength(arr){
    return arr.sort((a,b) => a.length - b.length)
    }

    function sortByAscii(arr){
     return arr.sort((a,b) => a.localeCompare(b))
    }
let sortedArray = sortArrayByLength(sortByAscii(array))
console.log(sortedArray.join('\n'));

    
    

    

   
}
twoCriteria(['alpha', 'beta', 'gamma'])
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
twoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])