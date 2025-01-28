import { Funcionario } from "./aula 9/hw/RH/funcionario";
import { Contrato } from "./aula 9/hw/RH/contrato";
import { Porteiro } from "./aula 9/hw/Seguranca/controleAcesso";

const funcionario = new Funcionario("João", 30, "123.456.789-00", "Recepcionista");
console.log(funcionario.permitirAcesso("autorizado"));
const contrato = new Contrato("01/01/2023", "31/12/2023", "CLT");
console.log(contrato.criarContrato(funcionario));
const porteiro = new Porteiro("Carlos", 40, "987.654.321-00", "Militar");
console.log(porteiro.registrarOcorrencia("Tentativa de invasão."));