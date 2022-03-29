<<<<<<< HEAD
function arrayRotation(list, rotations) {

    let nRotations = rotations % list.length;
    //console.log(nRotations);

    for (let i = 0; i < nRotations; i++) {
        let firstElement = list[0];

        for (let j = 0; j < list.length - 1; j++) {
            list[j] = list[j + 1];
            // console.log(list[0]);
        }
        list[list.length - 1] = firstElement;
        //console.log(firstElement);
    }
    console.log(list.join(' '));
}
arrayRotation([2, 4, 15, 31], 5);
=======
function arrayRotation(list, rotations) {

    let nRotations = rotations % list.length;
    //console.log(nRotations);

    for (let i = 0; i < nRotations; i++) {
        let firstElement = list[0];

        for (let j = 0; j < list.length - 1; j++) {
            list[j] = list[j + 1];
            // console.log(list[0]);
        }
        list[list.length - 1] = firstElement;
        //console.log(firstElement);
    }
    console.log(list.join(' '));
}
arrayRotation([2, 4, 15, 31], 5);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
