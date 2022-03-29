<<<<<<< HEAD
function counting(array){
    
    let obj = {}
    let wordsForMatching = array.shift().split(' ')
    

    for (const element of wordsForMatching) {
        obj[element] = 0

    }

    for (const element of array) {
        if(obj.hasOwnProperty(element)){
            obj[element]++
        }
    }
    let arrayOfObj = Object.entries(obj)
    let sorted = arrayOfObj.sort((a,b) =>{
        
        return b[1] - a[1] 
    })

    for (const element of sorted) {
        
        console.log(element[0], '-',element[1]);
            
        }
    

}
counting([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
    counting([
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
=======
function counting(array){
    
    let obj = {}
    let wordsForMatching = array.shift().split(' ')
    

    for (const element of wordsForMatching) {
        obj[element] = 0

    }

    for (const element of array) {
        if(obj.hasOwnProperty(element)){
            obj[element]++
        }
    }
    let arrayOfObj = Object.entries(obj)
    let sorted = arrayOfObj.sort((a,b) =>{
        
        return b[1] - a[1] 
    })

    for (const element of sorted) {
        
        console.log(element[0], '-',element[1]);
            
        }
    

}
counting([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
    counting([
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
        )