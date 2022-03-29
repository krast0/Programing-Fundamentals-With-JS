function huntingGame(array){
    let countDays = 0

    let daysOfAdventure = Number(array.shift())
    let countOfPlayers = Number(array.shift())
    let groupEnergy = Number(array.shift())
    let waterPerDayForPerson = Number(array.shift())
    let foodPerDayForPerson = Number(array.shift())

    let totalWater = Number(countOfPlayers * waterPerDayForPerson * daysOfAdventure)
    let totalFood = Number(countOfPlayers * foodPerDayForPerson * daysOfAdventure)

    for (let i = 0; i < array.length; i++) {
        countDays++
        let energyLost = Number(array[i]);
        groupEnergy -= energyLost
        if(groupEnergy <= 0){
    
            break;
        }
        if(countDays % 2 === 0){
            let bonusEnergy = groupEnergy * 0.05
            groupEnergy += bonusEnergy
            totalWater -= totalWater * 0.30

            //console.log(totalWater);
        }if(countDays % 3 === 0){
            let foodConsumed = totalFood / countOfPlayers
            totalFood -= foodConsumed
            groupEnergy = groupEnergy * 1.10
        }

    }
    if(groupEnergy > 0){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }else{
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
}
// huntingGame(["10",
// "7",
// "5035.5",
// "11.3",
// "7.2",
// "942.3",
// "500.57",
// "520.68",
// "540.87",
// "505.99",
// "630.3",
// "784.20",
// "321.21",
// "456.8",
// "330"])
//console.log('---');
huntingGame(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])


