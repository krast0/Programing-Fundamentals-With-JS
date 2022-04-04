function followers(input) {
    
    let obj = {}

    while(input[0] != 'Log out'){
        let tokens = input.shift().split(': ')
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = Number(tokens[2])
        if(command == 'New follower'){
            if(!obj.hasOwnProperty(p1)){
                obj[p1] = {'likes': 0,'comments': 0}
            }
        }else if(command == 'Like'){
            if(obj.hasOwnProperty(p1)){
            obj[p1].likes += p2
            }else{
                obj[p1] = {'likes': p2,'comments': 0}
            }
        }else if(command == 'Comment'){
            if(obj.hasOwnProperty(p1)){
                obj[p1].comments += 1
            }else{
                obj[p1] = {'likes': 0,'comments': 1}
            }
        }else if(command == 'Blocked'){
            if(!obj.hasOwnProperty(p1)){
                console.log(`${p1} doesn't exist.`);
            }else{
                delete obj[p1]
            }
        }
    }

let entries = Object.entries(obj)
console.log(`${entries.length} followers`);
for (const iterator of entries) {
    let sum = Number(iterator[1].likes) + Number(iterator[1].comments)
    console.log(`${iterator[0]}: ${sum}`);
}
}
followers(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])


