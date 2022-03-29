function smallestTwoNumbers(array) {
    
    let sortedElements = array.sort((a,b) => a - b)
    let firstTwo = sortedElements.slice(0,2)
    console.log(firstTwo.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5])
console.log('-----');
smallestTwoNumbers([3, 0, 10, 4, 7, 3])