<<<<<<< HEAD
function train(array) {
    
    let wagons = array
    .shift()
    .split(' ')
    .map(x => Number(x))
    let spaceInWagons = Number(array.shift())
    
    for (let i = 0; i < array.length; i++) {
        let [command,number] = array[i].split(" ");
        if(command === 'Add'){
            wagons.push(Number(number))
        }else{
            for (let j = 0; j < wagons.length; j++) {
                if(Number(command) + Number(wagons[j]) <= spaceInWagons){
                    wagons[j] += Number(command)
                    break;
                }else{
                    
                }
                
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
console.log('----');
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
=======
function train(array) {
    
    let wagons = array
    .shift()
    .split(' ')
    .map(x => Number(x))
    let spaceInWagons = Number(array.shift())
    
    for (let i = 0; i < array.length; i++) {
        let [command,number] = array[i].split(" ");
        if(command === 'Add'){
            wagons.push(Number(number))
        }else{
            for (let j = 0; j < wagons.length; j++) {
                if(Number(command) + Number(wagons[j]) <= spaceInWagons){
                    wagons[j] += Number(command)
                    break;
                }else{
                    
                }
                
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
console.log('----');
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
)