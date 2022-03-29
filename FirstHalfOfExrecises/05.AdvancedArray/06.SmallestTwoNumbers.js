<<<<<<< HEAD
function smallestTwoNumbers(array) {
    
    let sortedElements = array.sort((a,b) => a - b)
    let firstTwo = sortedElements.slice(0,2)
    console.log(firstTwo.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5])
console.log('-----');
=======
function smallestTwoNumbers(array) {
    
    let sortedElements = array.sort((a,b) => a - b)
    let firstTwo = sortedElements.slice(0,2)
    console.log(firstTwo.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5])
console.log('-----');
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
smallestTwoNumbers([3, 0, 10, 4, 7, 3])