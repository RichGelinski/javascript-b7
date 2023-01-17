class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

function createPerson(name, age) {
    let p = new Person(name, age)
    return p
}

let p1 = createPerson('Felipe', 32)
console.log(`${p1.name} tem ${p1.age} anos`)