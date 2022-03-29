<<<<<<< HEAD
function rightPlace(firstString,char,secoundString){

    let replacedString = ""
    //replace char in first string with for loop
    for(let i = 0;i < firstString.length;i++){
        if(firstString[i] !== "_"){
            replacedString += firstString[i]
        }else{
            replacedString += char
        }
        
    }
    //compare two strings , if equal print "Matched", otherwise "Not Matched"
    if(replacedString == secoundString){
        console.log('Matched')
    }else{
        console.log('Not Matched')
    }

}
=======
function rightPlace(firstString,char,secoundString){

    let replacedString = ""
    //replace char in first string with for loop
    for(let i = 0;i < firstString.length;i++){
        if(firstString[i] !== "_"){
            replacedString += firstString[i]
        }else{
            replacedString += char
        }
        
    }
    //compare two strings , if equal print "Matched", otherwise "Not Matched"
    if(replacedString == secoundString){
        console.log('Matched')
    }else{
        console.log('Not Matched')
    }

}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
rightPlace('Str_ng', 'i', 'String')