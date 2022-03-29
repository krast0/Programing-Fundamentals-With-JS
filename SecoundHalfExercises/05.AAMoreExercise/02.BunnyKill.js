<<<<<<< HEAD
function bunnyKill(array){
    let bunnies = []
    let coordinates = array.pop().split(' ')
    for(let i = 0;i < coordinates.length;i++){
        let columnAndRow = coordinates[i].split(',')
        let row = columnAndRow[0]
        let column = columnAndRow[1]

        for (let index = 0; index < array.length; index++) {
            bunnies = []
            let element = array[row].split(' ')
            
            
        }
        
    }


    console.log(array);
    
}
bunnyKill(['5 10 15 20',
          '10 10 10 10',
          '10 15 10 10',
          '10 10 10 10',
 '2,2 0,1']
=======
function bunnyKill(array){
    let bunnies = []
    let coordinates = array.pop().split(' ')
    for(let i = 0;i < coordinates.length;i++){
        let columnAndRow = coordinates[i].split(',')
        let row = columnAndRow[0]
        let column = columnAndRow[1]

        for (let index = 0; index < array.length; index++) {
            bunnies = []
            let element = array[row].split(' ')
            
            
        }
        
    }


    console.log(array);
    
}
bunnyKill(['5 10 15 20',
          '10 10 10 10',
          '10 15 10 10',
          '10 10 10 10',
 '2,2 0,1']
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
)