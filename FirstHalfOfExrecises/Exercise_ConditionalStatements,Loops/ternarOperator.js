function ternarOperator(year){



    let result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "yes" : "no"
    console.log(result)
}
ternarOperator(24)
ternarOperator(2003)