function darkDungeon(array) {
    let health = 100
    let coins = 0
    let coinsSum = 0
    let string = array[0]
    let splitstring = string.split('|')
    let room = ''
    let firstPart = ''
    let secoundPart = ''
    let splitnat = []
    let lefthealth = 0
    let isDead = false
    let counter = 0
    for(let i = 0;i < splitstring.length;i++){
        counter++
        room = splitstring[i]
        splitnat = room.split(' ')
        firstPart = splitnat[0]
        secoundPart = splitnat[1]
        if(firstPart === 'potion'){
            lefthealth = health
            health += Number(secoundPart)
            if(health > 100){
                health = 100
                secoundPart = health - lefthealth
            }
            
            console.log(`You healed for ${secoundPart} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(firstPart === 'chest'){
            coins = Number(secoundPart)
            coinsSum += coins
            console.log(`You found ${coins} coins.`)
        }else{
            let monsterName = firstPart
            health -= secoundPart
            if(health > 0){
                console.log(`You slayed ${monsterName}.`)
            }else{
                isDead = true
                console.log(`You died! Killed by ${monsterName}.`);
                break;
            }

        }

    }
    if(isDead){
        console.log(`Best room: ${counter}`)
    }else{
    console.log(`You've made it!`);
    console.log(`Coins: ${coinsSum}`);
    console.log(`Health: ${health}`);
    }

}
//darkDungeon(["preslav 10|komshiq 20|potion 30|Raina 10|chest 40|Milko Kalaijiev 50|chest 1000|potion 30"])
console.log('---');
darkDungeon(["cat 10|potion 30|orc 10|chest 10|snake 35|chest 110"])
