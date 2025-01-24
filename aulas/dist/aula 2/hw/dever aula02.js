"use strict";
// 1) Crie no arquivo index.ts da nossa aplicação uma função que retorne no typescrip baseado em um enum com as seguintes condições: se for do tipo 1, é "Admin", se for do tipo 2 é "usuário"
// 2) Crie no arquivo do index.ts 3 arrays com tipos diferentes, sendo um de tipo de um objeto personalizável, exemplo: People, Animal e etc.
var UserType;
(function (UserType) {
    UserType["Admin"] = "1";
    UserType["User"] = "2";
})(UserType || (UserType = {}));
const userType = (tipo) => {
    switch (tipo) {
        case Funcao.Admin:
            return 'admin';
            break;
        case Funcao.User:
            return 'user';
            break;
        default:
            return 'não encontrado';
            break;
    }
};
console.log(userType(1)); //admin
