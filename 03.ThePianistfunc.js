function thePianist(input) {
    let obj = {}
    let funcs = {
        Add,
        Remove,
        ChangeKey
    }
    let numberOfPieces = input.shift()
    for (let i = 0; i < numberOfPieces; i++) {
        let element = input.shift();
        let tokens = element.split('|')
        let piece = tokens[0]
        let composer = tokens[1]
        let key = tokens[2]
        obj[piece] = [composer,key]
    }
    while(input[0] != 'Stop'){
    let [command,song,p1,p2] = input.shift().split('|')
        let action = funcs[command]
        action(song,p1,p2)
        }
    

    function Add(piece,composer,key){
        if(!obj.hasOwnProperty(piece)){
            obj[piece] = [composer,key]
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }else{
                console.log(`${piece} is already in the collection!`);
            }
    }
    function Remove(piece) {
        if(obj.hasOwnProperty(piece)){
            delete obj[piece]
            console.log(`Successfully removed ${piece}!`)
        }else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
    function ChangeKey(piece,newKey) {
        if(obj.hasOwnProperty(piece)){
            obj[piece][1] = newKey
            console.log(`Changed the key of ${piece} to ${newKey}!`)
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
    }
    for (const key in obj) {
        console.log(`${key} -> Composer: ${obj[key][0]}, Key: ${obj[key][1]}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )