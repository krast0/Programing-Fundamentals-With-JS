function firstAndLast(array) {
    
    let k = array.shift()
    

    let firstNs = array.slice(-k)
    let Ns = array.slice(0,k)
    console.log(Ns.join(' '));
    console.log(firstNs.join(' '));
    
}
firstAndLast([2, 
    7, 8, 9]
    )
    console.log('------');
firstAndLast([3,
    6, 7, 8, 9]
   )