import { Funcionario } from "../RH/funcionario";

export class Limpeza extends Funcionario {
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        salarioBruto: number,
        senha: string,
  
    ) {
        super(nome, idade, cpf, "Limpeza", salarioBruto, senha);        
    }

    verificarProduto(produto: string[], equipamento: string[]): string {
        if (produto.length == 0 || equipamento.length == 0) {
            return `${produto} ou ${equipamento} faltando!`
        } 
        return "Nenhum produto ou equipamento faltando!"
    }

    verificarLimpeza(area: string, qualidade: number): string {
        if (qualidade >= 8) {
            return `${area} está limpa e dentro dos padrões de qualidade.`;
        } else {
            return `${area} precisa de mais atenção para atender aos padrões de limpeza.`;
        }
    }
}
