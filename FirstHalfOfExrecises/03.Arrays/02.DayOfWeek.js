function dayOfWeek(num) {
    if(num < 1 || num > 7){
        console.log('Invalid day!')
    }else{
  let arr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(arr[num - 1])
}
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
