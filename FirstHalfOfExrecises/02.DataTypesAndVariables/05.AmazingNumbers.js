<<<<<<< HEAD
function amazingNumbers(num){

    let strResult = String(num)
    let result = 0
    let isAmazing = ''
    
    for(let i = 0;i < strResult.length;i++){
        result += Number(strResult[i])

    }
    let resultStr = String(result)
    for(let i = 0; i < resultStr.length;i++){
        if(resultStr[i] == "9"){
            isAmazing = 'True'
        }else{
            isAmazing = 'False'
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`)
}
amazingNumbers(999)
console.log('---')
=======
function amazingNumbers(num){

    let strResult = String(num)
    let result = 0
    let isAmazing = ''
    
    for(let i = 0;i < strResult.length;i++){
        result += Number(strResult[i])

    }
    let resultStr = String(result)
    for(let i = 0; i < resultStr.length;i++){
        if(resultStr[i] == "9"){
            isAmazing = 'True'
        }else{
            isAmazing = 'False'
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`)
}
amazingNumbers(999)
console.log('---')
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
amazingNumbers(583472)