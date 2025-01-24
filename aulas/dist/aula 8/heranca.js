"use strict";
// AULA 21/01 -> AULA 8
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
