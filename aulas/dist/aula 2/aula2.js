"use strict";
// const add = (a: number, b: number): number => {
//     return a + b
// }
// const n1 = 15;
// const n2 = 10;
// const result = add(n1,n2);
// console.log(`a soma de ${n1} e ${n2} é ${result}`);
// interface Pessoa {
//     name: string,
//     age: number | null, //pode ser nulo tambem e na hora de retornar nao retorna nada
//     weight: string,
//     isStudent: boolean
// }
// const ana: Pessoa = {
//     name: 'ana',
//     age: null,
//     weight: '71kg',
//     isStudent: true
// }
// console.log(ana)
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "Pendente";
    TaskStatus["InProgress"] = "Em progresso";
    TaskStatus["Completed"] = "Completo";
})(TaskStatus || (TaskStatus = {}));
function createTask(id, title, description) {
    return {
        id,
        title,
        description,
        status: TaskStatus.Pending,
    };
}
function updateTaskStatus(task, newStatus) {
    return Object.assign(Object.assign({}, task), { status: newStatus });
}
function displayTask(task) {
    console.log(`Task #${task.id}`);
    console.log(`Title: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Status: ${task.status}`);
    console.log("--------------------------");
}
const task1 = createTask(1, "Titulo qlq", "Descricao qlq");
displayTask(task1);
const updatedTask1 = updateTaskStatus(task1, TaskStatus.InProgress);
displayTask(updatedTask1);
const completedTask1 = updateTaskStatus(updatedTask1, TaskStatus.Completed);
displayTask(completedTask1);
