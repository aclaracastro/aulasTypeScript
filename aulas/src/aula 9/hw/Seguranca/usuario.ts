export interface IUsuario {
    autenticar(senha: string): boolean;
    exibirPerfil(): string;
}

export class Usuario implements IUsuario {
    constructor(
        public id: number,
        public nome: string,
        public idade: number,
        public cpf: string,
        public senha: string
    ) {}

    autenticar(senha: string): boolean {
        return this.senha == senha; // Verifica se a senha fornecida é igual à senha do usuário
    }

    exibirPerfil(): string {
        return `Usuário: ${this.nome}, ID: ${this.id}, CPF: ${this.cpf}.`;
    }
}