function pcStore(array) {
    let priceForRegular = 0
    let priceForSpecial = 0
    let command = array.pop()

    for (let i = 0; i < array.length; i++) {
        const element = Number(array[i]);
        if(element < 0){
            console.log('Invalid price!');
        }else{
        priceForRegular += element
        }
    }
    let taxes = priceForRegular * 0.2
    let priceForRegularWithTaxes = priceForRegular * 1.20
    let priceForSpecialWithTaxes = (priceForRegular * 1.20) 
    let discountedPriceForSpecial = priceForSpecialWithTaxes * 0.90
    

    if (command === 'special') {
        if(discountedPriceForSpecial === 0){
            console.log("Invalid order!");
        }else{
            console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceForRegular.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${discountedPriceForSpecial.toFixed(2)}$`)
        }
    }else if(command === 'regular'){
        if(priceForRegularWithTaxes === 0){
            console.log("Invalid order!");
        }else{
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceForRegular.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${priceForRegularWithTaxes.toFixed(2)}$`
        );
        }
    }
}
pcStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    
// pcStore([
//     'regular'
//     ])

    
    
    