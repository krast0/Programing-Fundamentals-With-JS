array => array
    .filter((x,i) => i % 2 != 0)
    .map(x => x * 2)
    .reverse()
    .join(' ')
    
console.log(array([10, 15, 20, 25]))