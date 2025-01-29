import { Funcionario } from "./funcionario";

export class Contrato {

    constructor(
        public dataInicio: string, 
        public dataTermino: string, 
        public tipo: 'CLT' | 'PJ'
    ) {}

    criarContrato(funcionario: Funcionario): string { //iniciando o contrato
        return `Contrato criado para ${funcionario.nome} (${funcionario.cargo}) com início em ${this.dataInicio} do tipo ${this.tipo}`;
    }

    rescindirContrato(funcionario: Funcionario): string { //terminando o contrato
        return `Contrato de ${funcionario.nome} finalizado em ${this.dataTermino}`;
    }

}