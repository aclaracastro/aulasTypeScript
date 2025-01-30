"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const usuario_1 = require("../Seguranca/usuario");
const controleAcesso_1 = require("../Seguranca/controleAcesso");
class Funcionario extends usuario_1.Usuario {
    constructor(nome, idade, cpf, cargo, salarioBruto, senha) {
        super(generateUniqueId(), nome, idade, cpf, senha);
        this.cargo = cargo;
        this.salarioBruto = salarioBruto;
        this.controleAcesso = new controleAcesso_1.ControleAcesso();
    }
    atualizarCargo(novoCargo) {
        this.cargo = novoCargo;
        console.log(`Cargo de ${this.nome} atualizado para ${this.cargo}`);
    }
    calcularSalario(dados) {
        const { salarioBruto, desconto } = dados;
        const valorDesconto = salarioBruto * (desconto / 100);
        const salarioLiquido = salarioBruto - valorDesconto;
        return salarioLiquido;
    }
    permitirAcesso() {
        return this.controleAcesso.permitirAcesso(this);
    }
}
exports.Funcionario = Funcionario;
function generateUniqueId() {
    return Math.floor(Math.random() * 1000);
}
