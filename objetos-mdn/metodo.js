/*
métodos são funções, basicamente chamamos como função, usando (), eles são vinculados a uma classe e podem ser chamados fora do contexto
as referências aos métodos apontam ao mesmo
*/

const Pessoa = function(genero) {
    this.genero = genero
    console.log('Pessoa instanciada')
}

Pessoa.prototype.dizerOla = function() {
    console.log('hello')
}

const pessoa1 = new Pessoa('Masculino')
const pessoa2 = new Pessoa('Feminino')

pessoa1.dizerOla()