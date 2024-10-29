const person = {
    name: "servo",
    lastName : "wamak",
    age: 44,
    science: {
        soso: "lili", age2: 88
    }
}

console.log("numele este: ", person.name)
console.log("numele este: ", person.lastName)
console.log("numele este: ", person.age)
console.log("numele este: ", person["name"])
console.log("numele este: ", person["lastName"])
console.log("numele este: ", person["age"])
console.log("numele este: ", person["miau"])
console.log("numele este: ", person.dau)
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
console.log(person.science.soso)
console.log(person.science['soso'])
console.log(person.science['age2'])

console.log(person.science.soso)
console.log(person.science.age2)