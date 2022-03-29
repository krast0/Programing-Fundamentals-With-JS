<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
)