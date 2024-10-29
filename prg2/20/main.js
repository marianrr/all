const jsonString = '{"name": "Marian", "age": 40}'

const person1 = JSON.parse(jsonString)
console.log(person1.name, person1.age)