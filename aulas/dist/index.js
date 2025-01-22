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
// enum Funcao {
//     DonoDaLoja = 1,
//     GerenteDaLoja = 2,
// }
// const qualFuncao = (param: number): Funcao | string => { 'quarta';
//     switch(param){
//         case Funcao.DonoDaLoja:
//             return 'dono da loja';
//             break;
//         case Funcao.GerenteDaLoja:
//             return 'gerente da loja';
//             break;
//         default:
//             return 'função não encontrada'
//             break;
//     }
// }
// console.log(qualFuncao(2)); //gerente
// console.log(qualFuncao(3)); //função não encontrada
//AULA 21/01
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    cumprimentar() {
        return `olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade); //chama o construtor da classe base
        this.cargo = cargo;
    }
    descreverCargo() {
        return `eu sou ${this.nome} e trabalho como ${this.cargo}`;
    }
}
const funcionario1 = new Funcionario("Ana", 20, "Desenvolvedora");
console.log(funcionario1.descreverCargo());
const pessoa1 = new Pessoa('João', 25);
console.log(pessoa1.cumprimentar());
