function hogwarts(input) {
    
    let word = input.shift()
    while(input[0] != 'Abracadabra'){
        let [command,p1,p2] = input.shift().split(' ')
        if(command == 'Abjuration'){
            word = word.toUpperCase()
            console.log(word);
        }else if(command == 'Necromancy'){
            word = word.toLowerCase()
            console.log(word);
        }else if(command == 'Illusion'){
            p1 = Number(p1)
            if(p1 < word.length && p1 >= 0){
               word = word.split('')
              let splice = word.splice(p1,1,p2)
                word = word.join('')
                console.log('Done!');
            }else{
                console.log("The spell was too weak.");
            }
        }else if(command == 'Divination'){
            if(word.includes(p1)){
                let regex = new RegExp(p1,'g')
                word = word.replace(regex,p2)
                console.log(word);
            }
        }else if(command == 'Alteration'){
            if(word.includes(p1)){
                let firstHalf = word.slice(0,word.indexOf(p1))
                let secoundHalf = word.slice(firstHalf.length + p1.length,word.length)
                word = firstHalf + secoundHalf
                console.log(word);
            }
        }else{
            console.log("The spell did not work!");
        }
    }


}
hogwarts(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])

