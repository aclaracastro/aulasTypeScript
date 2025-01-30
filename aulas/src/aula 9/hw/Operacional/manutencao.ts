import { Funcionario } from "../RH/funcionario";

export class Manutencao extends Funcionario {
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        salarioBruto: number,
        senha: string,
    ) {
        super(nome, idade, cpf, "Manutenção", salarioBruto, senha);
    }

    realizarManutencao(equipamento: string, data: string): string {
        return `Manutenção de ${equipamento} agendada para dia ${data} com o funcionário ${this.nome}`;
    }

    verificarStatusEquipamento(equipamento: string, status: boolean): string {
        if (status) {
            return `${equipamento} está funcionando corretamente.`;
        } else {
            return `${equipamento} precisa de manutenção urgente.`;
        }
    }
}
