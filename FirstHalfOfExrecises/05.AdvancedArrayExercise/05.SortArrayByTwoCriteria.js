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
twoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])