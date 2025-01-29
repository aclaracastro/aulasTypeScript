// Herda de Usuario.
import { Usuario } from "../Seguranca/usuario";

export interface DadoSalario{
    salarioBruto: number;
    desconto: any;
}

export class Funcionario extends Usuario {
    
    constructor(
        public nome:string,
        public idade: number,
        public cpf: string,
        public cargo: string, 
        public salarioBruto: number,
        public senha: string
    ) { super(generateUniqueId(),nome, idade, cpf,senha) }
    
    atualizarCargo(novoCargo: string): any {
        this.cargo = novoCargo;
        console.log(`Cargo de ${this.nome}atualizado para ${this.cargo}`)
    }

    calcularSalario(dados: DadoSalario): number {
        const { salarioBruto, desconto } = dados;
        const valorDesconto = salarioBruto * (desconto/100);
        const salarioLiquido = salarioBruto - valorDesconto;
        return salarioLiquido;   
    } 
}

function generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
}
