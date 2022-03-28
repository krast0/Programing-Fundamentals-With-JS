function partyTime(input) {
    let regular = new Set()
    let vips = new Set()
    let didntcameToParty = []
    while(input[0] != 'PARTY'){
        let guestName = input.shift()
        if(guestName.charCodeAt(0) >= 48 &&guestName.charCodeAt(0) <= 57){
            vips.add(guestName)
        }else{
            regular.add(guestName)
        }
        
    }
    let count = 0
    for (let index = 1; index < input.length; index++) {
        const element = input[index];
            vips.delete(element)
            regular.delete(element)
    }
    console.log(vips.size + regular.size);
  for (const iterator of vips) {
      console.log(iterator);
  }
    for (const iterator of regular) {
        console.log(iterator);
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)