<<<<<<< HEAD
function softuniStudents(array) {
  let newArr = [];
  let numberOfStudents = Number(array.shift());
  let totalNumberOfLectures = Number(array.shift());
  let bonusPoints = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let bonus = 0
    let countOfAttendances = Number(array[i]);
    if(countOfAttendances === 0){
        bonus = 0
    }else{
    bonus =
      (countOfAttendances / totalNumberOfLectures) * (5 + bonusPoints);
    }
    newArr.push(bonus);
  }
  newArr.sort((a, b) => b - a);
  array.sort((a, b) => b - a);
  let mostAttendences = array[0];
  let biggestbonus = newArr[0];
  console.log(`Max Bonus: ${Math.ceil(biggestbonus)}.`);
  console.log(`The student has attended ${mostAttendences} lectures.`);
}
softuniStudents(["50","50",'0','0']);
=======
function softuniStudents(array) {
  let newArr = [];
  let numberOfStudents = Number(array.shift());
  let totalNumberOfLectures = Number(array.shift());
  let bonusPoints = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let bonus = 0
    let countOfAttendances = Number(array[i]);
    if(countOfAttendances === 0){
        bonus = 0
    }else{
    bonus =
      (countOfAttendances / totalNumberOfLectures) * (5 + bonusPoints);
    }
    newArr.push(bonus);
  }
  newArr.sort((a, b) => b - a);
  array.sort((a, b) => b - a);
  let mostAttendences = array[0];
  let biggestbonus = newArr[0];
  console.log(`Max Bonus: ${Math.ceil(biggestbonus)}.`);
  console.log(`The student has attended ${mostAttendences} lectures.`);
}
softuniStudents(["50","50",'0','0']);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
