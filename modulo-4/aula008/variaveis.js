class Person {
    static hands = 2 //uma variável estática passa a pertencer somente a classe a qual ela foi declarada, e não a um novo objeto criado
    constructor (name,age) {
        this.name = name
        this.age = age
    }
}

let p1 = new Person('Felipe', 32)
console.log(`${p1.name} tem ${Person.hands} mãos`)