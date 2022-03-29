<<<<<<< HEAD
    function arrayRotation(arr, num) {
        for(let i = 0; i < num ; i++) {
            let currentNum = Number(arr.shift());
            arr.push(currentNum);
        }
        console.log(arr.join(` `))
}
=======
    function arrayRotation(arr, num) {
        for(let i = 0; i < num ; i++) {
            let currentNum = Number(arr.shift());
            arr.push(currentNum);
        }
        console.log(arr.join(` `))
}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
arrayRotation([51, 47, 32, 61, 21], 2)