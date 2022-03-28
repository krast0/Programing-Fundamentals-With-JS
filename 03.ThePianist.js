function thePianist(input) {
    let obj = {}
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
        if(command == 'Add'){
            if(!obj.hasOwnProperty(song)){
            obj[song] = [p1,p2]
            console.log(`${song} by ${p1} in ${p2} added to the collection!`);
            }else{
                console.log(`${song} is already in the collection!`);
            }
        }else if(command == 'Remove'){
            if(obj.hasOwnProperty(song)){
                delete obj[song]
                console.log(`Successfully removed ${song}!`)
            }else{
                console.log(`Invalid operation! ${song} does not exist in the collection.`);
            }
        }else if(command == 'ChangeKey'){
            if(obj.hasOwnProperty(song)){
            obj[song][1] = p1
            console.log(`Changed the key of ${song} to ${p1}!`)
            }else{
                console.log(`Invalid operation! ${song} does not exist in the collection.`);
            }
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