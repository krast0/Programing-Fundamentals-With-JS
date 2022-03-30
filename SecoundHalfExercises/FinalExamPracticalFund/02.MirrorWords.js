function mirrorWords(input) {
    let regex = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g
    let word = regex.exec(input)
    let array = []
    let count = 0
    while(word != null){
        count++
        let reversed = word.groups.first.split('').reverse().join('')
        if(reversed == word.groups.second){
            array.push(word.groups.first + ' <=> ' + word.groups.second)
        }
        word = regex.exec(input)
        
    }
    
if(count > 0){
    console.log(`${count} word pairs found!`);
}else{
    console.log("No word pairs found!");
}
    if(array.length > 0){

        console.log('The mirror words are:');
console.log(array.join(', '));
    }else{
        console.log('No mirror words!');
    }
}
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
    
    )