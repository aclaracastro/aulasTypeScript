"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_1 = require("./aula 9/hw/RH/funcionario");
const contrato_1 = require("./aula 9/hw/RH/contrato");
const aPagar_1 = require("./aula 9/hw/Contabilidade/aPagar");
const aReceber_1 = require("./aula 9/hw/Contabilidade/aReceber");
const limpeza_1 = require("./aula 9/hw/Operacional/limpeza");
const manutencao_1 = require("./aula 9/hw/Operacional/manutencao");
const quartos_1 = require("./aula 9/hw/Operacional/quartos");
const controleAcesso_1 = require("./aula 9/hw/Seguranca/controleAcesso");
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
//contrato
console.log('---RH -> Contrato---');
const contrato = new contrato_1.Contrato('20/10/2024', '20/03/2025', 'CLT');
console.log(contrato.criarContrato(funcionario)); //criar contrato
console.log("    ");
console.log(contrato.rescindirContrato(funcionario)); //rescindir contrato
console.log('-------------');
console.log("    ");
console.log('---Contabilidade -> A Pagar---');
//contabilidade
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
console.log("-------------");
console.log('---Segurança -> controle de acesso---');
const controleAcesso = new controleAcesso_1.ControleAcesso();
const usuario1 = new usuario_1.Usuario(1, 'Alice', 30, '159.753.456-02', 'senha123');
const usuario2 = new usuario_1.Usuario(2, 'Fabio', 28, '987.654.321-00', 'seguro456');
controleAcesso.adicionarUsuario(usuario1); //adc usuario no controle acesso
controleAcesso.adicionarUsuario(usuario2);
console.log(`Acesso do ${usuario1.nome}:`, controleAcesso.permitirAcesso(usuario1)); // true
console.log(`Acesso do ${usuario2.nome}:`, controleAcesso.permitirAcesso(usuario2)); // true
console.log("    ");
//HOSPEDE
console.log("-------------");
console.log('---Recepção -> hospede---');
const hospede1 = new hospede_1.Hospede(1, "João Silva", 23, "123.456.789-10", "senha123", 101, '25/01/2025', '31/01/2025');
console.log(hospede1.exibirInformacoes());
console.log(hospede1.mudarQuarto(102));
//RESERVA
console.log("    ");
console.log("-------------");
console.log('---Recepção -> reserva---');
const hospede2 = new hospede_1.Hospede(1, "João Silva", 23, "123.456.789-10", "senha123", 101, '31/01/2025', '02/02/2025');
const reserva1 = new reserva_1.Reserva(2, quartos_1.TipoQuarto.Duplo, hospede2, '00');
console.log(reserva1.detalhesReserva());
console.log(reserva1.alterarDataSaida("2025-02-12"));
