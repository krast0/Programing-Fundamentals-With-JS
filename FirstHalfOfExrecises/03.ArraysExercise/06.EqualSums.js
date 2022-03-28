
    function equalSums(array){
        let suml = 0
        let sumr = 0
        let check = ""
        let currentindex = 'no'
        for(let i = 0;i < array.length;i++){
            sumr = 0
            if(i === 0){
                suml=0
            }else{
                suml += array[i - 1] 
                //console.log(suml);
            }
            for(let j = i+1;j < array.length;j++){
                sumr += array[j]
                
            }

            if(suml === sumr){
                currentindex = i
            }
        }
console.log(currentindex);


    }
equalSums([1, 2, 3, 3])
console.log('---');
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
console.log('---');
equalSums([1, 2, 3])