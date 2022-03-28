function blackFlag(array) {
    let sum = 0
    let days = Number(array.shift())
    let plunderForADay = Number(array.shift())
    let expectedPlunder = Number(array.shift())
    let plunderForThirdDay = plunderForADay * 1.5
    for (let i = 1; i <= days; i++) {
        
        if(i % 3 === 0){
            sum += plunderForThirdDay
        }else{
            sum += plunderForADay
        }
        if(i % 5 === 0){
            let lostPlunder = sum * 0.3
            sum -= lostPlunder
        }
        
    }
    let percent = sum / expectedPlunder * 100
    if(sum >= expectedPlunder){
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    }else{
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }
}
// blackFlag(["5",
// "40",
// "100"])
blackFlag(["10",
"20",
"380"])

