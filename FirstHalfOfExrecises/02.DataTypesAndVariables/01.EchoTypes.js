function echoTypes(param){
    type = typeof(param)
    if(type == 'string' || type == 'number'){
        console.log(type)
        console.log(param)
    }else{
        console.log(type)
        console.log('Parameter is not suitable for printing')
    }
}
echoTypes(null)