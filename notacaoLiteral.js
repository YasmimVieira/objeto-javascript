const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //modo antigo
const obj2 = { a, b, c } //modo atual
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //criar objeto a partir de uma variavel
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //forma antiga
    },
    funcao2() {
        //forma atual
    }
}
console.log(obj5)