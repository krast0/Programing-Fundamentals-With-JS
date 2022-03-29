<<<<<<< HEAD
function equalNeighbors(array) {
let count = 0
let symbol2 = ''
    for (let i = 1; i <= array.length; i++) {

        let element = array[i - 1];
        let element2 = array[i]
        for(let j = 0;j < element.length;j++){
            let symbol = element[j]
            if(i == array.length){
            symbol2 = undefined
            delete symbol2
            }else{
                symbol2 = element2[j]
            }


            let nextnum = element[j + 1]
            if(element.indexOf(symbol) === element.indexOf(symbol2)){

                count++
            }
            if(nextnum != undefined){
            if(symbol === nextnum){
                count++
            }
        }
        }

        
    }
    console.log(count);
}
equalNeighbors([['2','2','5','7','4'],
                ['4','0','5','3','4'],
                ['2','5','5','4','2']]
)
console.log('---');
equalNeighbors([['test', 'yo', 'yo', 'ho'],
                ['well', 'done', 'no', '6'],
                ['not', 'done', 'yet', '5']]
)
console.log('----');
equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]
=======
function equalNeighbors(array) {
let count = 0
let symbol2 = ''
    for (let i = 1; i <= array.length; i++) {

        let element = array[i - 1];
        let element2 = array[i]
        for(let j = 0;j < element.length;j++){
            let symbol = element[j]
            if(i == array.length){
            symbol2 = undefined
            delete symbol2
            }else{
                symbol2 = element2[j]
            }


            let nextnum = element[j + 1]
            if(element.indexOf(symbol) === element.indexOf(symbol2)){

                count++
            }
            if(nextnum != undefined){
            if(symbol === nextnum){
                count++
            }
        }
        }

        
    }
    console.log(count);
}
equalNeighbors([['2','2','5','7','4'],
                ['4','0','5','3','4'],
                ['2','5','5','4','2']]
)
console.log('---');
equalNeighbors([['test', 'yo', 'yo', 'ho'],
                ['well', 'done', 'no', '6'],
                ['not', 'done', 'yet', '5']]
)
console.log('----');
equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
)