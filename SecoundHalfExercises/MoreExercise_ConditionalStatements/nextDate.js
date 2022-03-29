function nextDate(year,month,day){

let nextDate = new Date(year,month - 1,day + 1);
let newYear = nextDate.getFullYear();
let newMonth = nextDate.getMonth() + 1
let newday = nextDate.getDate() ;

console.log(`${newYear}-${newMonth}-${newday}`)
  

}
nextDate(2016, 9, 20)