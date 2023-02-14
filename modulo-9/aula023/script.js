let veiculo = {
    modelo: 'Cobalt',
    marca: 'Chevrolet',
    cor: 'Preto',
    ano: 2012
}
console.log(Object.keys(veiculo))// retorna apenas os 'atributos' do objeto
console.log(Object.values(veiculo))// retorna os valores declarados nos atributos
console.log(Object.entries(veiculo))//retorna uma quantidade de arrays igual a quantidade de 'atributos', os valores de cada array será 'atributo' e 'valores'