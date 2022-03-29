<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
