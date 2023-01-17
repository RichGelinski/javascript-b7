class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    msgWelcome() {
        console.log(`${this.name}. Seja bem vindo!`)
    }
}

class Student extends Person {
    constructor (name, id, age) {
        super(name)
        this.id = id
        this.age = age
    }

    sayHello() {
        super.msgWelcome()
    }
}

let p1 = new Student('Felipe', 8074799, 32)

p1.sayHello()
console.log(`Seu ID é #${p1.id}`)
