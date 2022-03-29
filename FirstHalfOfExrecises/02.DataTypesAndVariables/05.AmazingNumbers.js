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
amazingNumbers(583472)