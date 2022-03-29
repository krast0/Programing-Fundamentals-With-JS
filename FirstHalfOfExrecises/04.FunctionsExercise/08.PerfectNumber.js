<<<<<<< HEAD
//Write a function that receives a number and checks if that number is perfect or NOT.
//A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
//Output
//•	If the number is perfect, print: "We have a perfect number!"
//•	Otherwise, print: "It's not so perfect."
function perfecto(number){
function perfectNumber(number){
let sum = 0
for(let i = 1;i < number;i++){
    if(number % i === 0){
        sum += i
    }
    
}
return(sum === number ? true : false)


}
let isPerfect = perfectNumber(number)
if(isPerfect){
    console.log('We have a perfect number!')
}else{
    console.log("It's not so perfect.");
}


}
=======
//Write a function that receives a number and checks if that number is perfect or NOT.
//A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
//Output
//•	If the number is perfect, print: "We have a perfect number!"
//•	Otherwise, print: "It's not so perfect."
function perfecto(number){
function perfectNumber(number){
let sum = 0
for(let i = 1;i < number;i++){
    if(number % i === 0){
        sum += i
    }
    
}
return(sum === number ? true : false)


}
let isPerfect = perfectNumber(number)
if(isPerfect){
    console.log('We have a perfect number!')
}else{
    console.log("It's not so perfect.");
}


}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
perfecto(6)