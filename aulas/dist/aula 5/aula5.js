"use strict";
function getFirstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const strings = ['a', 'b', 'c'];
console.log(getFirstElement(numbers)); //1
console.log(getFirstElement(strings)); //'a'
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: 'Ana' }, { age: 20 });
console.log(result);
class Box {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new Box("A book");
const numberBox = new Box(123);
console.log(stringBox.getContent()); //"A book"
console.log(numberBox.getContent()); //123
const item = { key: 1, value: "apple" };
const item2 = { key: "apple", value: 2 };
console.log(item);
console.log(item2);
//criar funcao que deve garantir que os tipos dos objetos sejam preservados
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = { name: "alice" };
const obj2 = { age: 25 };
const resultado = mergeObject(obj1, obj2);
console.log(result); // { name: 'alice', age: 25 }
//implementar funcao chamada de logValues que receba array de qualquer tipo (any[])
function logValues(array) {
    array.forEach(element => {
        console.log(`valor ${element} tipo ${typeof element}`);
    });
}
logValues([42, 'oi', true]);
