function intAndFloat(num1,num2,num3){
    ////find their sum 
    let result = num1 + num2 + num3
    //let strResult = String(result)
    //let type = ""
    //for(let i = 0;i < strResult.length;i++){
    //    if(strResult[i] == '.'){
    //        type = "Float"
    //        break;
    //    }else{
    //        type = "Integer"
    //    }
    //}
    //console.log(`${result} - ${type}`)
//
//
//
    ////check if sum is int or float
result % 1 === 0 ? result += ' - Integer': result += ' - Float'
console.log(result)
}
intAndFloat(9,100,1.1)