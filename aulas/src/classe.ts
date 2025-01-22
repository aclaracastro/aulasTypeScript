// class Pessoa {
//     nome: string;
//     idade: number;

//     constructor(nome:string, idade:number){
//         this.nome = nome;
//         this.idade = idade;
//     }

//     cumprimentar():string{
//         return`olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
//     }
// }

// class Funcionario extends Pessoa{
//     cargo: string;

//     constructor(nome:string, idade:number, cargo:string){
//         super(nome,idade); //chama o construtor da classe base
//         this.cargo = cargo
//     }

//     descreverCargo(): string{
//         return `eu sou ${this.nome} e trabalho como ${this.cargo}`;
//     }
// }

// const funcionario1 = new Funcionario("Ana",20,"Desenvolvedora");
// console.log(funcionario1.descreverCargo());

// const pessoa1 = new Pessoa('João',25);
// console.log(pessoa1.cumprimentar());