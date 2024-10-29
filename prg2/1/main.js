class Student {
    constructor(name) {
        this.name = name
    }
    set name(stock) {
        this._name = stock
    }
    get name() {
        return this._name
    }
    
  
    
}

const mi = new Student("mili")
console.log(mi.name)