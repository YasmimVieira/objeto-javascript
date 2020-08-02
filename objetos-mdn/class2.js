const Pessoa = function(nome) {
    this.nome = nome
    console.log('Exemplar de Pessoa criado')
}

const pessoa1 = new Pessoa('Carol')
const pessoa2 = new Pessoa('Maria')

console.log('pessoa1 é ' + pessoa1.nome);
console.log('pessoa2 é ' + pessoa2.nome)