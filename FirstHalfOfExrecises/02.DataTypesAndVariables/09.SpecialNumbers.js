function specialNumbers(num){

    for(let n = 1;n <= num;n++){
        let result = 0
        let numAsString = String(n)

        for(let i = 0;i < numAsString.length ;i++){
            result += Number(numAsString[i])

        }
        let isSpecial = false
        if(result == 5 || result == 7 || result == 11){
            isSpecial = true
        }

        if(isSpecial){
            console.log(`${n} -> True` )
        }else{
            console.log(`${n} -> False`)
        }

    }
    
}
specialNumbers(130)