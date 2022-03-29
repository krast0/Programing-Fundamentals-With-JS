function commonElems(array1, array2) {


    for (const el1 of array1) {
        for (const el2 of array2) {
            if(el1 === el2){
                console.log(el1)
            }
        }
    }


}
commonElems(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
console.log('---');
commonElems(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)
