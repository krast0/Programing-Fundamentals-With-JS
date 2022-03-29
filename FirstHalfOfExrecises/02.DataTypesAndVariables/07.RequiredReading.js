function requiredReading(pages,pagesPerHour,days){

    let timeToReadBook = pages / pagesPerHour
    let hoursNeeded = timeToReadBook / days

    console.log(hoursNeeded)

}
requiredReading(432,
    15 ,
    4 
    )