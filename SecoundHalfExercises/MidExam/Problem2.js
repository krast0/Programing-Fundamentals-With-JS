function friendList(array){
    let blacklistedCount = 0
    let lostCount = 0
    let index = 0
    let list = array.shift().split(', ')
    while(array[index] != 'Report'){
        let action = array[index].split(' ')
        let command = action[0]
        switch (command) {
            case 'Blacklist':
                let name = action[1]
                if(list.includes(name)){
                    let indexOfName = list.indexOf(name)
                    blacklistedCount++
                    console.log(`${name} was blacklisted.`)
                    list[indexOfName] = 'Blacklisted'
                }else{
                    console.log(`${name} was not found.`);
                }
                break;
                case 'Error':
                let indexOfError = Number(action[1])
                if(indexOfError >= 0 && indexOfError < list.length){
                    if(list[indexOfError] != 'Blacklisted' && list[indexOfError] != 'Lost'){
                        console.log(`${list[indexOfError]} was lost due to an error.`);
                        list[indexOfError] = 'Lost'
                        lostCount++
                    }
                }
                break;
                case 'Change':
                    let indexOfChange = Number(action[1])
                    let newName = action[2]
                    if(indexOfChange >= 0 && indexOfChange < list.length){
                        console.log(`${list[indexOfChange]} changed his username to ${newName}.`);
                        list.splice(indexOfChange,1,newName)
                        
                    }
                break;
        }
        

        index++
    }
    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(list.join(' '));
}
// friendList(["Mike, John, Eddie, William",
// "Blacklist Maya",
// "Error 1",
// "Change 4 George",
// "Report"])
friendList(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
// friendList(["Mike, John, Eddie",
// "Blacklist Mike",
// "Error 0",
// "Report"])


