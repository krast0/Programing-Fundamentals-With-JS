<<<<<<< HEAD
function furniture(input) {
    let totalSum = 0
    console.log('Bought furniture:');
    for (const line of input) {
        if(line == 'Purchase'){
            break;
        }
        let reg = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g
        let result = reg.exec(line)
        if (result) {
            console.log(result.groups.name);
            totalSum += Number(result.groups.price) * Number(result.groups.quantity)
        }
       
}
console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

=======
function furniture(input) {
    let totalSum = 0
    console.log('Bought furniture:');
    for (const line of input) {
        if(line == 'Purchase'){
            break;
        }
        let reg = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g
        let result = reg.exec(line)
        if (result) {
            console.log(result.groups.name);
            totalSum += Number(result.groups.price) * Number(result.groups.quantity)
        }
       
}
console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
)