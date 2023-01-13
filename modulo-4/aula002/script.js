class Person { //classes de objetos são criadas com letra maiuscula
    steps = 0 //  variável geral. Para todos os objetos

    constructor (name, age) { //base construída para poder criar objetos
        this.nome = name
        this.idade = age //this.idade será o atributo que o objeto herdará da variável "age"
    }

    makeAStep() { //função que aumenta os steps de cada objeto
        this.steps++
    }
}

let p1 = new Person('Felipe', 32) // objetos criados com os atributos das variáveis do constructor

console.log(p1.nome, p1.idade)

p1.makeAStep()
p1.makeAStep()
p1.makeAStep()

console.log(`${p1.nome} deu ${p1.steps} passos`)