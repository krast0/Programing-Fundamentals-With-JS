function cvtToJSON(name,lastName,hairColor) {
    let person = {
        'name': name,
        'lastName': lastName,
        'hairColor': hairColor
    }
    let json = JSON.stringify(person)
    console.log(json); 
}
cvtToJSON('George', 'Jones', 'Brown')