"use strict";
// const add = (a: number, b: number): number => {
//     return a + b
// }
// const n1 = 15;
// const n2 = 10;
// const result = add(n1,n2);
// console.log(`a soma de ${n1} e ${n2} é ${result}`);
// interface Pessoa {
//     name: string,
//     age: number | null, //pode ser nulo tambem e na hora de retornar nao retorna nada
//     weight: string,
//     isStudent: boolean
// }
// const ana: Pessoa = {
//     name: 'ana',
//     age: null,
//     weight: '71kg',
//     isStudent: true
// }
// console.log(ana)
//aula 4 
var Funcao;
(function (Funcao) {
    Funcao[Funcao["DonoDaLoja"] = 1] = "DonoDaLoja";
    Funcao[Funcao["GerenteDaLoja"] = 2] = "GerenteDaLoja";
})(Funcao || (Funcao = {}));
const qualFuncao = (param) => {
    'quarta';
    switch (param) {
        case Funcao.DonoDaLoja:
            return 'dono da loja';
            break;
        case Funcao.GerenteDaLoja:
            return 'gerente da loja';
            break;
        default:
            return 'função não encontrada';
            break;
    }
};
console.log(qualFuncao(2)); //gerente
console.log(qualFuncao(3)); //função não encontrada
