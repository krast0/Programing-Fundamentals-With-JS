<<<<<<< HEAD
function oddApereances(input) {
    let words = input.split(' ')
    let obj = {}

    for (const word of words) {
        let lowerCaseWord = word.toLocaleLowerCase()
        
        if(obj.hasOwnProperty(lowerCaseWord)){
            obj[lowerCaseWord]++
        }else{
            obj[lowerCaseWord] = 1
        }
    }
    let filtered = Object.entries(obj)
    let result = filtered.filter((w) => {
        if(w[1] % 2 == 1){
            return true
        }else{
            return false
        }
    })
    console.log(result.map((r) => r[0]).join(' '));
}
=======
function oddApereances(input) {
    let words = input.split(' ')
    let obj = {}

    for (const word of words) {
        let lowerCaseWord = word.toLocaleLowerCase()
        
        if(obj.hasOwnProperty(lowerCaseWord)){
            obj[lowerCaseWord]++
        }else{
            obj[lowerCaseWord] = 1
        }
    }
    let filtered = Object.entries(obj)
    let result = filtered.filter((w) => {
        if(w[1] % 2 == 1){
            return true
        }else{
            return false
        }
    })
    console.log(result.map((r) => r[0]).join(' '));
}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
oddApereances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')