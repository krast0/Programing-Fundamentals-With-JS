function listOfProducts(array) {
    
    let sortedElements = array.sort()

    for (let i = 0; i < sortedElements.length; i++) {
        let element = array[i];
        console.log(`${i + 1}.${element}`);
        
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
console.log('----');
listOfProducts(['Watermelon', 'Banana', 'Apples'])