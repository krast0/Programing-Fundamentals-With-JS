function printAndSum(n1,n2){

    let sum = 0
    let str = ""

    for(let i = n1;i <= n2;i++){
        sum += i
        str = str + i + ' '

        
    }
    console.log(str)
    console.log(`Sum: ${sum}`)
}
printAndSum(0,26)
