function race(input) {
    
    let names = input.shift().split(', ')
    let obj = {}
    let newArr = []
    for (const line of input) {
        if(line == 'end of race'){
            break
        }

        let name = ''
        let sum = 0
        for (const letter of line) {         //this is finds the name
            let findNameRegEx = /[A-Za-z]/g
            let findSumRegEx = /\d/g
            let result = findNameRegEx.exec(letter)
            if(result != null){
            name += result[0]
            }
            let digit = findSumRegEx.exec(letter)
            if(digit != null){
                sum += Number(digit[0])
            }

            
        }

        if(names.includes(name)){
            if(obj.hasOwnProperty(name)){
                obj[name] += sum
            }else{
                obj[name] = sum
            }
            
      }

        // console.log(name);
        // console.log(sum);
    }
    for (const key in obj) {
      newArr.push([key,obj[key]])
    }
    let sorted = newArr.sort((a,b) => b[1] - a[1])
    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`)
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne, Nicoleinka',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'N^&%i(&(*&235co^%^&leinka242',
'end of race']

)