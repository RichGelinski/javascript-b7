class Person {
    _age = 10

    constructor(primeiroNome, sobrenome) {
        this.firstName = primeiroNome
        this.lastName = sobrenome
    }

    get fullName () { //Usando um getter para unificar duas variáveis e retornar uma só
        return `${this.firstName} ${this.lastName}`
    }

    get age () {
        return this._age
    }

    set age(x) { //usado para pegar um valor 'personalizado/setado' e retornar na variável age
        return this._age = x      
    }

}

let p1 = new Person('Felipe', 'Gonçalves')
p1.age = 32
console.log(`${p1.fullName} tem ${p1.age} anos.`)

