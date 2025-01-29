// Centraliza a lógica de verificação de acesso.
// Utiliza um banco de dados para armazenar usuários e suas permissões.
// Verifica se o usuário possui a permissão necessária para realizar uma ação.

import { Usuario } from "./usuario";

export class ControleAcesso {
    private usuarios: Map<number, Usuario> = new Map();

    adicionarUsuario(usuario: Usuario) {
        this.usuarios.set(usuario.id, usuario);
    }

    permitirAcesso(usuario: Usuario): string {
        const funcionario = usuario;
        
        if(usuario == funcionario){
            return "Acesso liberado"
        }
        return "Acesso apenas aos quartos e áreas de lazer" 
    }
}


// export class controleAcesso {
//     constructor(
//         public nome: string,
//         public idade: number, 
//         public cpf:string, 
//         public cargo: string
//     ) {}

//     permitirAcesso(identificacao:string): boolean{ 
//         return identificacao == 'autorizado'
//     }

    
// }



// export class Porteiro extends FuncionarioSeguranca {

//     verificarEntrada():string {
//         return "Entrada verificada pelo porteiro"
//     }

//     registrarOcorrencia(ocorrencia: string): string {
//         return `O ${this.cargo} ${this.nome} relatou: ${ocorrencia}`; //ou Porteiro relatou Tentativa de invasao (mais rápido)
//     }
// }