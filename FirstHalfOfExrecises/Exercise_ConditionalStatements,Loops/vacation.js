<<<<<<< HEAD
function vacation(number,type,day){

    let totalPrice = 0

    if(day === "Friday"){
        if(type === "Students"){
            totalPrice = 8.45 * number
            if(number >= 30){
                totalPrice *= 0.85
            }
        }else if(type === "Business"){
            totalPrice = 10.90 * number
            if(number >= 100){
                totalPrice -= 10.90 * 10
            }
        }else if(type === "Regular"){
            totalPrice = 15 * number
            if(number >= 10 && number <= 20){
                totalPrice *= 0.95
            }
        }
    }else if(day === "Saturday"){
        if(type === "Students"){
            totalPrice = 9.80 * number
            if(number >= 30){
                totalPrice *= 0.85
            }
        }else if(type === "Business"){
            totalPrice = 15.60 * number
            if(number >= 100){
                totalPrice -= 15.60 * 10
            }
        }else if(type === "Regular"){
            totalPrice = 20 * number
            if(number >= 10 && number <= 20){
                totalPrice *= 0.95
            }
        }
    }else if(day === "Sunday"){
        if(type === "Students"){
            totalPrice = 10.46 * number
            if(number >= 30){
                totalPrice *= 0.85
            }
        }else if(type === "Business"){
            totalPrice = 16 * number
            if(number >= 100){
                totalPrice -= 16 * 10
            }
        }else if(type === "Regular"){
            totalPrice = 22.50 * number
            if(number >= 10 && number <= 20){
                totalPrice *= 0.95
            }
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
=======
function vacation(number,type,day){

    let totalPrice = 0

    if(day === "Friday"){
        if(type === "Students"){
            totalPrice = 8.45 * number
            if(number >= 30){
                totalPrice *= 0.85
            }
        }else if(type === "Business"){
            totalPrice = 10.90 * number
            if(number >= 100){
                totalPrice -= 10.90 * 10
            }
        }else if(type === "Regular"){
            totalPrice = 15 * number
            if(number >= 10 && number <= 20){
                totalPrice *= 0.95
            }
        }
    }else if(day === "Saturday"){
        if(type === "Students"){
            totalPrice = 9.80 * number
            if(number >= 30){
                totalPrice *= 0.85
            }
        }else if(type === "Business"){
            totalPrice = 15.60 * number
            if(number >= 100){
                totalPrice -= 15.60 * 10
            }
        }else if(type === "Regular"){
            totalPrice = 20 * number
            if(number >= 10 && number <= 20){
                totalPrice *= 0.95
            }
        }
    }else if(day === "Sunday"){
        if(type === "Students"){
            totalPrice = 10.46 * number
            if(number >= 30){
                totalPrice *= 0.85
            }
        }else if(type === "Business"){
            totalPrice = 16 * number
            if(number >= 100){
                totalPrice -= 16 * 10
            }
        }else if(type === "Regular"){
            totalPrice = 22.50 * number
            if(number >= 10 && number <= 20){
                totalPrice *= 0.95
            }
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
vacation(40,"Regular","Saturday")