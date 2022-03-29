//•	< 3.00 - "Fail"
//•	>= 3.00 and < 3.50 - "Poor"
//•	>= 3.50 and < 4.50 - "Good"
//•	>= 4.50 and < 5.50 - "Very good"
//•	>= 5.50 - "Excellent"
function grade(number){

    let result = ''

    if(number <= 2.99){
        result = 'Fail'
    }else if(number < 3.50){
        result = 'Poor'
    }else if(number < 4.50){
        result = 'Good'
    }else if(number < 5.50){
        result = 'Very good'
    }else if(number >= 5.50  && number <= 6.00){
        result = 'Excellent'
    }


    if(result === 'Fail'){
        console.log(`${result} (${Math.floor(number)})`)
    }else{
        console.log(`${result} (${number.toFixed(2)})`);
    }

    
}
grade(3.33)
grade(2.99)
grade(4.50)