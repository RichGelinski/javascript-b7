let pessoa = '{"nome": "Felipe", "idade": 32}'//variavel com uma string em formato JSON. 

pessoa = JSON.parse(pessoa)//JSON.parse transforma a string da variável em um objeto (porém, só funciona, se a string estiver com os padrões corretos)

console.log(pessoa.nome)