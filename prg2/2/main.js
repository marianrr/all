class Teacher {
    constructor(name, age) {
        this._name = name
        this._age = age
        console.log("parent", this._name, this._age)

    }

    name1() {
        return this._name + " " + this._age
    }

}

class Decond extends Teacher {
    constructor(name, age) {
        super(name, age)
        console.log("child", this._name, this._age)
    }

}

const soso = new Teacher("Walter", 22)
const toto = new Decond("rachetus", 3)
console.log(soso.name1())
console.log(soso.name)

console.log(toto.name1())
console.log(toto.name)