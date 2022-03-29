<<<<<<< HEAD
function theatrePromotions(day,age){

    let price = 0

    if(age >= 0 &&age <= 122 ){
    switch(day){
        case "Weekday":
            if(age >= 18 && age <= 64){
                price = 18
            }else{
                
                price = 12
            }
            break;
        case "Weekend":
            if(age >= 18 && age <= 64){
                price = 20
            }else{
                price = 15
            }
            break;
        case "Holiday":
            if(age <= 18){
                price = 5
            }else if(age >= 18 & age <= 64){
                price = 12
            }else{
                price = 10
            }
    }
    
    console.log(price+"$")
}else{
    console.log("Error!")
}



}
theatrePromotions("Weekday",42)
theatrePromotions('Holiday', -12)
=======
function theatrePromotions(day,age){

    let price = 0

    if(age >= 0 &&age <= 122 ){
    switch(day){
        case "Weekday":
            if(age >= 18 && age <= 64){
                price = 18
            }else{
                
                price = 12
            }
            break;
        case "Weekend":
            if(age >= 18 && age <= 64){
                price = 20
            }else{
                price = 15
            }
            break;
        case "Holiday":
            if(age <= 18){
                price = 5
            }else if(age >= 18 & age <= 64){
                price = 12
            }else{
                price = 10
            }
    }
    
    console.log(price+"$")
}else{
    console.log("Error!")
}



}
theatrePromotions("Weekday",42)
theatrePromotions('Holiday', -12)
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
theatrePromotions('Holiday', 15)