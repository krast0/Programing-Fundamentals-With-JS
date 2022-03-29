function split(string) {
    let newStr = ''
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if(element.toUpperCase() == element){
            newStr +=  ` ${element}`
        }else{
            newStr += element
        }
    }
    let trimmed = newStr.trim()
    console.log(trimmed.split(' ').join(', '));
}
split('SplitMeIfYouCanHaHaYouCantOrYouCan'
)