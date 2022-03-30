function passwordsReset(input) {
    let commands = {
        TakeOdd,
        Cut,
        Substitute
    }
    let string = input.shift()
    
    while(input[0] != 'Done'){
        let tokens = input.shift().split(' ')
        let name = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]
        let command = commands[name]
        string = command(string,p1,p2)
    }

    console.log(`Your password is: ${string}`);

    function TakeOdd(string) {
        string = string.split('')
        let newString = ''
        for (let i = 1; i < string.length; i+=2) {
            const element = string[i];
            newString += element
        }
    
        console.log(newString);
        return newString
    }
    function Cut(string,index,length) {
        let removeString = string.slice(Number(index),Number(index) + Number(length))
        string = string.split(removeString).join('')
        console.log(string);
        return string
    }
    function Substitute(string,substring,substitute) {
        if(string.includes(substring)){
        let changer = new RegExp(substring,'gm')
        string = string.replace(changer,substitute)
        console.log(string);
        }else{
            console.log('Nothing to replace!');
        }
        return string
    }
}

passwordsReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
