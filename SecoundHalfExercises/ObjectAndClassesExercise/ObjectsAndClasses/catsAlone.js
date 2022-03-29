function cats(arrayOfCats){
    class Cat {
        constructor(name,age){
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let catArray = []
    for (const catAsString of arrayOfCats) {
        let tokens = catAsString.split(' ')
        let cat = new Cat(tokens[0],Number(tokens[1]))
        catArray.push(cat)
    }
    for (const cat of catArray) {
        cat.meow()
    }
}
cats(['Mellow 2','Tom 5'])