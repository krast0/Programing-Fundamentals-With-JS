function destinationMapper(input) {
    let regex = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/gm
    let tokens = regex.exec(input)
    let locations = []
    while(tokens != null){
        locations.push(tokens.groups.location)
        tokens = regex.exec(input)
    }
    let sum = 0
    for (const location of locations) {
        sum += location.length
    }
    console.log(`Destinations: ${locations.join(', ')}`);
    console.log(`Travel Points: ${sum}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=KuKuuu/")