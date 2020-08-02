//programação naseada em prótipos
//classes definem o que um objeto vai ter e vai fazer, colocando suas chave/valor e métodos

const Pessoa = function() {
    console.log("exemplar criado")
}

const pessoa1 = new Pessoa()
const pessoa2 = Object.create(Pessoa)

const pessoa = {
    eHumano: false,
    resultado: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.eHumano}`);
    }
};

const eu = Object.create(pessoa)
eu.name = 'Yasmim'
eu.eHumano = true

eu.resultado()