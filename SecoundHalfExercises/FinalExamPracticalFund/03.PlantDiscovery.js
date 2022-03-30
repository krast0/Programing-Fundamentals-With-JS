function plantDiscovery(input) {
    let plants = {}
    let ratings = {}
    let numberOfPlants = Number(input.shift())

    for (let i = 0; i < numberOfPlants; i++) {
        let [nameOfPlant,rarity] = input.shift().split('<->');
        if (plants.hasOwnProperty(nameOfPlant) == false) {
            plants[nameOfPlant] = {};
        }
        plants[nameOfPlant] = rarity
        
    }

    while (input[0] != 'Exhibition') {
        let tokens = input.shift().split(':')
        let command = tokens[0]
        let [plant,p1] = tokens[1].split(' - ')
        if(command == "Rate"){
            if(plants.hasOwnProperty(plant) == false){
               console.log('error');
            }else{
                if (plants[plant].hasOwnProperty('Rating') == false) {
                    plants[plant]['Rating'] = [];
                }
                plants[plant]['Rating'].push(p1);
            }
        }
    }
    console.log(plants);

}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
