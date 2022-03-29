function stringSubstring(string,sentance) {
    let arrayOfWords = sentance.split(' ')
    
    for (const word of arrayOfWords) {
        let lowerCaseWords = word.toLowerCase()
        if(lowerCaseWords == string){
           return console.log(string);
        }
    }
    return console.log(`${string} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)