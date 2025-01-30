"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_1 = require("./aula 9/hw/RH/funcionario");
const contrato_1 = require("./aula 9/hw/RH/contrato");
const aPagar_1 = require("./aula 9/hw/Contabilidade/aPagar");
const aReceber_1 = require("./aula 9/hw/Contabilidade/aReceber");
const limpeza_1 = require("./aula 9/hw/Operacional/limpeza");
const manutencao_1 = require("./aula 9/hw/Operacional/manutencao");
const quartos_1 = require("./aula 9/hw/Operacional/quartos");
const usuario_1 = require("./aula 9/hw/Seguranca/usuario");
const hospede_1 = require("./aula 9/hw/Recepcao/hospede");
const reserva_1 = require("./aula 9/hw/Recepcao/reserva");
//Funcionário
console.log('---RH -> Funcionário---');
const funcionario = new funcionario_1.Funcionario('João', 30, '123.456.789-00', 'Gerente', 5000, 'senha123');
console.log(funcionario.exibirPerfil()); //exibir funcionario
console.log(`Salário líquido de ${funcionario.nome}: R$${funcionario.calcularSalario({ salarioBruto: funcionario.salarioBruto, desconto: 10 })}`); //exibir salário líquido 
console.log("    ");
funcionario.atualizarCargo('Diretor'); //atualizar cargo 
console.log(`Cargo atualizado: ${funcionario.cargo}`);
console.log(funcionario.permitirAcesso());
console.log("    ");
console.log('---RH -> Contrato---');
const contrato = new contrato_1.Contrato('20/10/2024', '20/03/2025', 'CLT');
console.log(contrato.criarContrato(funcionario)); //criar contrato
console.log("    ");
console.log(contrato.rescindirContrato(funcionario)); //rescindir contrato
console.log('-------------');
console.log("    ");
console.log('---Contabilidade -> A Pagar---');
const conta = new aPagar_1.APagar('Bomba da piscina', 1000, '27/01/2025', aPagar_1.FormaPagamento.BOLETO);
console.log(conta.pagamentoDetalhado()); //pagamento detalhado
console.log(conta.verificarVencimento()); //verificando se ja venceu e aparece como nao paga!
console.log(conta.pagar()); //aparece como paga
console.log("    ");
console.log('---Contabilidade -> A Receber---');
const receber = new aReceber_1.AReceber("Ana", 2500, aPagar_1.FormaPagamento.PIX);
console.log(receber.dadosRecebidos());
console.log(receber.tipoPagamento());
console.log('-------------');
console.log("    ");
console.log('---Operacional -> Limpeza---');
const funcionarioLimpeza = new limpeza_1.Limpeza('Adriana', 35, '123.456.789-00', 3000, 'senhaLimpeza');
const produtos = ['Detergente', 'Desinfetante', 'Limpa vidros'];
const equipamentos = ['Vassoura', 'Pano de chão', 'Esponja'];
console.log(funcionarioLimpeza.verificarProduto(produtos, equipamentos));
console.log(funcionarioLimpeza.verificarLimpeza('Recepção', 8));
console.log("    ");
console.log('---Operacional -> Manutenção---');
const funcionarioManutencao = new manutencao_1.Manutencao('Mateus', 40, '321.654.987-00', 4000, 'senhaManutencao');
console.log(funcionarioManutencao.realizarManutencao('Elevador', '31/01/2025'));
console.log(funcionarioManutencao.verificarStatusEquipamento('Bomba da piscina', false));
console.log("    ");
console.log('---Operacional -> Quarto---');
const comodidade = ['Frigobar', 'Wifi'];
const quarto = new quartos_1.Quarto(202, quartos_1.TipoQuarto.Suite, quartos_1.StatusQuarto.Livre, comodidade);
console.log(`Quarto 202 - tipo ${quarto.tipo}. status: ${quarto.status}`); //alterar status do quarto
console.log(quarto.adicionarComodidade('Banheira'));
console.log("    ");
// Criando um quarto com os enums
const quarto1 = new quartos_1.Quarto(101, quartos_1.TipoQuarto.Suite, quartos_1.StatusQuarto.Livre, ['Ar condicionado', 'Frigobar']);
// Verificando o status inicial
console.log(`Quarto 101 - Tipo: ${quarto1.tipo}, Status: ${quarto1.status}`); // Quarto 101 - Tipo: Suíte, Status: LIVRE
// Alterando o status do quarto
quarto1.alterarStatus(quartos_1.StatusQuarto.Ocupado);
// Verificando o status após a alteração
console.log(`Quarto 101 - Tipo: ${quarto1.tipo}, Status: ${quarto1.status}`);
quarto1.adicionarComodidade('Wi-Fi');
//A PAGAR
const despesa = new aPagar_1.APagar("bomba da piscina", 1000, '25-01-2025', aPagar_1.FormaPagamento.BOLETO, false);
console.log(despesa.pagamentoDetalhado());
console.log(despesa.verificarVencimento()); //ainda nao foi pago
console.log(despesa.pagar());
//A RECEBER
// const receber = new AReceber('Alanis Castro',2500,FormaPagamento.CARTAO)
// console.log(receber.dadosRecebidos())
// console.log(receber.tipoPagamento())
//HOSPEDE
const hospede1 = new hospede_1.Hospede(1, "João Silva", 23, "123.456.789-10", "senha123", 101, '25/01/2025', '31/01/2025');
// Exibindo informações do hóspede (vai usar as informações herdadas de Usuario)
console.log(hospede1.exibirInformacoes()); // "Hóspede: João Silva, CPF: 123.456.789-10, Quarto: 101"
// Mudando o quarto do hóspede
console.log(hospede1.mudarQuarto(102));
//RESERVA
const hospede2 = new hospede_1.Hospede(1, "João Silva", 23, "123.456.789-10", "senha123", 101, '31/01/2025', '02/02/2025');
// Criando uma reserva para esse hóspede
const reserva1 = new reserva_1.Reserva(2, quartos_1.TipoQuarto.Duplo, hospede2, '00');
// Exibindo os detalhes da reserva com o nome do hóspede
console.log(reserva1.detalhesReserva());
// "Reserva feita para o hóspede João Silva (CPF: 123.456.789-10). 2 pessoas. Tipo de quarto: Duplo. Data de entrada: 2025-02-01, Data de saída: 2025-02-10."
// Alterando a data de saída da reserva
console.log(reserva1.alterarDataSaida("2025-02-12"));
// Módulo RH - Funcionario
// Criando usuário para segurança (acesso)
const usuarioSeguranca = new usuario_1.Usuario(1, 'Maria', 28, '987.654.321-00', 'senhaSegura');
// Criando funcionário de Limpeza e Manutenção
// // const funcionarioLimpeza = new Limpeza('Carlos', 25, '112.233.445-66', 3000, 'senhaLimpeza');
// const funcionarioManutencao = new Manutencao('Ana', 30, '223.344.556-77', 3500, 'senhaManutencao');
// const produtos = ['Detergente', 'Desinfetante'];
// const equipamentos = ['Vassoura', 'Pano de chão'];
// console.log(funcionarioLimpeza.verificarProduto(produtos, equipamentos)); // Nenhum produto ou equipamento faltando!
// console.log(funcionarioManutencao.realizarManutencao('Bomba da piscina', '10/02/2025'))
// Testando o método verificarLimpeza (com qualidade de 9 para área da Recepção está limpa e dentro dos padrões de qualidade.
// Testando o método verificarLimpeza (com qualidade de 5 para banheiro)
// const funcionario = new Funcionario("João", 30, "123.456.789-00", "Recepcionista",5000,'1243');
// // console.log(funcionario.permitirAcesso("autorizado"));
// const contrato = new Contrato("01/01/2023", "31/12/2023", "CLT");
// console.log(contrato.criarContrato(funcionario));
// const porteiro = new Porteiro("Carlos", 40, "987.654.321-00", "Militar");
// console.log(porteiro.registrarOcorrencia("Tentativa de invasão."));
// const funcionarioLimpeza = new Limpeza('Andreia', 35, "123.456.789-03",2)
// // console.log(limpeza.limparArea('quarto 353', 'sja'))
// const controleAcesso = new ControleAcesso();
// // controleAcesso.adicionarUsuario(funcionarioLimpeza);
// // console.log(funcionarioLimpeza.permitirAcesso());
// const resultadoLimpeza = funcionarioLimpeza.limparArea("Sala de Reuniões");
// console.log(resultadoLimpeza);
// const produtos = ["Detergente", "Desinfetante"];
// const equipamentos = ["Vassoura", "Pano"];
// console.log(funcionarioLimpeza.verificarProduto(produtos, equipamentos)); 
// const produtos = ['sabao','detergente'];
// const equipamentos = ['vassoura', 'balde'];
// console.log(limpeza.verificarProduto(produtos,equipamentos))
