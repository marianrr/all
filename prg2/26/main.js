class Person {
  constructor(name, age, title) {
    this.name = name
    this.age = age
    this.title = title
  }
}

class Cora extends Person {

}

class Lolo extends Person {
constructor(name = null,...params){
  super(...params)
  this.zero = "lili"
}
}

const miau = new Cora("mili", 44, "serif")
console.log(miau)

const gigi = new Lolo("marean", 24, "trandafir")
console.log(gigi)