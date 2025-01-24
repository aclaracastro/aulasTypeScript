"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CanEat {
    eat() {
        console.log("this entity can eat");
    }
}
class CanWalk {
    walk() {
        console.log("this entity can walk");
    }
}
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
applyMixins(Person, [CanEat, CanWalk]);
const person = new Person('João');
person.eat();
person.walk();
//outro exemplo
class Professor {
    inserirNotas() {
        //permite lançar notas no sistema
    }
}
class Direcao {
    modificarNotas() {
        //permite modificar notas no sistema
    }
}
class Coordenador {
    constructor(name) {
        this.name = name;
    }
}
applyMixins(Coordenador, [Professor, Direcao]);
const coordenador = new Coordenador("joão");
coordenador.inserirNotas();
coordenador.modificarNotas();
