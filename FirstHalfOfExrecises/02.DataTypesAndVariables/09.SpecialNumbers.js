<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
specialNumbers(130)