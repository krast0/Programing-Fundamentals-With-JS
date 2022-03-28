function Pyramid(base, increment) {
 
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
 
    while (base>2) {
     let marbel=base*4-4;
     let stone=base*base-marbel;
        totalstone+=stone;
 
        row++;
        if(row%5===0){
            totallapis+=marbel;
        }else{
            totalmarble+=marbel;
        }
        base-=2;
    }
    row++;
    let gold=base*base;
 
    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row*increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}
Pyramid(23,0.5)