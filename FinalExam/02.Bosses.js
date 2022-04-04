function bosses(input) {
    let numberOfLoops = input.shift()
    
    for (let i = 0; i < numberOfLoops; i++) {
        let regex = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g
        let element = input[i];
        let word = regex.exec(element)
        
        if(word == null){
            console.log('Access denied!');
        }else{
            console.log(`${word.groups.name}, The ${word.groups.title}
>> Strength: ${word.groups.name.length}
>> Armor: ${word.groups.title.length}`
            );
        }
    }
}
bosses(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])

