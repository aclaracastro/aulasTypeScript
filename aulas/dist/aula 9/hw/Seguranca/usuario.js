"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, nome, idade, cpf, senha) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.senha = senha;
    }
    autenticar(senha) {
        return this.senha == senha; // Verifica se a senha fornecida é igual à senha do usuário
    }
    exibirPerfil() {
        return `Usuário: ${this.nome}, ID: ${this.id}, CPF: ${this.cpf}.`;
    }
}
exports.Usuario = Usuario;
