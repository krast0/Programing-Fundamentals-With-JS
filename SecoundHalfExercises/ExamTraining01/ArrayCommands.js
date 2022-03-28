function arrayCommands(array){
    let index = 1
    let numbers = String(array[0]).split(' ').map(Number)
    let command = ''
    let sumForMultiplier = 0
    let decreasedArray = []
 

  while(command != 'end'){
    command = array[index].split(' ')
    let firstCommand = command[0]

      if(firstCommand === 'swap'){
        let temp = numbers[command[1]]
        numbers[command[1]] = numbers[command[2]]
        numbers[command[2]] = temp

      }else if(firstCommand === 'multiply'){
        sumForMultiplier = Number(numbers[command[1]]) * Number(numbers[command[2]])
        numbers[command[1]] = sumForMultiplier
      
      }else if(firstCommand === 'decrease'){
          numbers = numbers.map(x => x-1)

        
      }else{
        break;
      }

    index++
     
  }
  

  console.log(numbers.join(', '));
}
//arrayCommands([
// '23 -2 321 87 42 90 -123',
//  'swap 1 3',
//  'swap 3 6',
//  'swap 1 0',
//  'multiply 1 2',
//  'multiply 2 1',
//  'decrease',
//  'end',
//]
//)
//console.log('----');
arrayCommands([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  )
