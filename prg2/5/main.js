
const obj1 = {
    name: "Walter",
    age: 33
}

let first = obj1.name
let second = obj1.age
let third = obj1.color

//console.log(first, second, third)

const one = document.getElementsByTagName("p")[0]
 one.textContent = first + third + second

 let html = document.querySelector('.elem') ? document.querySelector('.elem')?.innerHTML : null;