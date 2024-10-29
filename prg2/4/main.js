class Person {
    #name
    #age
    constructor(name, age) {
        
        this.#name = name
        this.#age = 222
        console.log("parent", this.#name, this.#age)
    }
}

class SecondPerson extends Person {
    constructor(name, age) {
        super(name, age)
        console.log(this.#name, this.#age)
    }
}

const azi = new Person("Mili", 25)
console.log(azi.name)