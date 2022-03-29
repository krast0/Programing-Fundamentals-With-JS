<<<<<<< HEAD
function bitcoinMining(input){
    let bitcoinprice = 11949.16
    let gramOfGold = 67.51
    let moneyOfGold = 0
    let day = Number(input[0])
    let index = 0
    let counter = 0
    let isBought = 0
    let firstbuy = false
    let checkday = 0



    for(let i = 1;i <= input.length;i++){


        day = Number(input[index])
        if(i % 3 === 0){
            day *= 0.70
        }
        moneyOfGold += day * gramOfGold
        if(moneyOfGold >= bitcoinprice){

            moneyOfGold -= bitcoinprice
            isBought++
        }
        if(isBought === 1){
            firstbuy = true
            checkday = i

        }


        

        index++
        counter++
        
    }
    while(moneyOfGold >= bitcoinprice){
        moneyOfGold -= bitcoinprice
        isBought++
    }
    console.log( `Bought bitcoins: ${isBought}`)
    if(firstbuy){
        console.log(`Day of the first purchased bitcoin: ${checkday}`)
    }
   
    console.log(`Left money: ${moneyOfGold.toFixed(2)} lv.`)

}
=======
function bitcoinMining(input){
    let bitcoinprice = 11949.16
    let gramOfGold = 67.51
    let moneyOfGold = 0
    let day = Number(input[0])
    let index = 0
    let counter = 0
    let isBought = 0
    let firstbuy = false
    let checkday = 0



    for(let i = 1;i <= input.length;i++){


        day = Number(input[index])
        if(i % 3 === 0){
            day *= 0.70
        }
        moneyOfGold += day * gramOfGold
        if(moneyOfGold >= bitcoinprice){

            moneyOfGold -= bitcoinprice
            isBought++
        }
        if(isBought === 1){
            firstbuy = true
            checkday = i

        }


        

        index++
        counter++
        
    }
    while(moneyOfGold >= bitcoinprice){
        moneyOfGold -= bitcoinprice
        isBought++
    }
    console.log( `Bought bitcoins: ${isBought}`)
    if(firstbuy){
        console.log(`Day of the first purchased bitcoin: ${checkday}`)
    }
   
    console.log(`Left money: ${moneyOfGold.toFixed(2)} lv.`)

}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
bitcoinMining([0, 0, 0])