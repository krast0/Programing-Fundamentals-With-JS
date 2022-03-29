<<<<<<< HEAD
function palindrome(array) {
    
    for (let i = 0; i < array.length; i++) {
        let element = String(array[i]);
        let reversedElement = element.split('').reverse().join("")
        if(reversedElement == element){
            console.log('true');
        }else{
            console.log('false');
        }

    }



}
palindrome([123,323,421,121])
console.log('-----');
=======
function palindrome(array) {
    
    for (let i = 0; i < array.length; i++) {
        let element = String(array[i]);
        let reversedElement = element.split('').reverse().join("")
        if(reversedElement == element){
            console.log('true');
        }else{
            console.log('false');
        }

    }



}
palindrome([123,323,421,121])
console.log('-----');
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
palindrome([32,2,232,1010])