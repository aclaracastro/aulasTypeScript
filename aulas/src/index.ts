import { Funcionario } from "./aula 9/hw/RH/funcionario";
import { Contrato } from "./aula 9/hw/RH/contrato";
// import { Porteiro } from "./aula 9/hw/Seguranca/controleAcesso";
// import { Limpeza } from "./aula 9/hw/Operacional/limpeza";
import { DadoSalario } from "./aula 9/hw/RH/funcionario";
// import { Usuario } from "./aula 9/hw/Seguranca/usuario";

// const usuario = new Usuario(1, "João", 30, "12345678901", [Permissao.ACESSAR_COZINHA, Permissao.VISUALIZAR_RELATORIOS]);
// console.log(usuario.permissoes)

const funcionario = new Funcionario("João", 30, "123.456.789-00", "Recepcionista",5000,'1243');
// console.log(funcionario.permitirAcesso("autorizado"));
const contrato = new Contrato("01/01/2023", "31/12/2023", "CLT");
console.log(contrato.criarContrato(funcionario));
// const porteiro = new Porteiro("Carlos", 40, "987.654.321-00", "Militar");
// console.log(porteiro.registrarOcorrencia("Tentativa de invasão."));

// const limpeza = new Limpeza('Andreia', 35, "123.456.789-03")
// console.log(limpeza.limparArea('quarto 353', "João"))

// const produtos = ['sabao','detergente'];
// const equipamentos = ['vassoura', 'balde'];
// console.log(limpeza.verificarProduto(produtos,equipamentos))




const dadoSalario: DadoSalario = {
  salarioBruto: funcionario.salarioBruto,
  desconto: 15 //percentual de desconto
};

const salarioLiquido = funcionario.calcularSalario(dadoSalario);
console.log(`Salário líquido de ${funcionario.nome} é de:`, salarioLiquido)