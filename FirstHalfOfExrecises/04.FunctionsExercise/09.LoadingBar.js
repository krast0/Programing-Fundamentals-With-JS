function loadingBar(number) {
    let str = ''
    for (let i = 1; i < 100; i+=10){

        if(i > number){
            str += '.'
        }else{
            str += '%'
        }


    }
    
if(number === 100){
    console.log(`100% Complete`);
}else{
    console.log(`${number}% [${str}]\nStill loading...`);
}


}
loadingBar(90)
