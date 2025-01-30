import { Usuario } from "../Seguranca/usuario";
import { ControleAcesso } from "../Seguranca/controleAcesso";

export interface DadoSalario {
    salarioBruto: number;
    desconto: number;
}

export class Funcionario extends Usuario {
    public controleAcesso: ControleAcesso;
    
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        public cargo: string,
        public salarioBruto: number,
        senha: string
    ) {
        super(generateUniqueId(), nome, idade, cpf, senha);
        this.controleAcesso = new ControleAcesso();
    }
    
    atualizarCargo(novoCargo: string): any {
        this.cargo = novoCargo;
        console.log(`Cargo de ${this.nome} atualizado para ${this.cargo}`);
    }

    calcularSalario(dados: DadoSalario): number {
        const { salarioBruto, desconto } = dados;
        const valorDesconto = salarioBruto * (desconto / 100);
        const salarioLiquido = salarioBruto - valorDesconto;
        return salarioLiquido;
    }

    permitirAcesso(): boolean {
        return this.controleAcesso.permitirAcesso(this);
    }
}

function generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
}