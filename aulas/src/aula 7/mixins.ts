import { inflateRaw } from "zlib";

class CanEat{
	eat(): void{
	  console.log("this entity can eat");
	}
}

class CanWalk{
	walk(): void{
	  console.log("this entity can walk");
	}
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
	    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>{
	        derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

class Person {
    name: string;
    
    constructor(name:string) {
        this.name = name;
    }
}

interface Person extends CanEat, CanWalk {}
applyMixins(Person, [CanEat, CanWalk]);
const person = new Person ('João');
person.eat();
person.walk();

//outro exemplo
class Professor {
    inserirNotas(): void {
        //permite lançar notas no sistema
    }
}

class Direcao {
    modificarNotas(): void {
        //permite modificar notas no sistema
    }
}

class Coordenador {
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

// function applyMixins(derivedCtor: any, baseCtor: any[]){ //comentado pq ta duplicado o applyMixins
//     baseCtors.forEach(baseCtor => {
// 	    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>{
// 	        derivedCtor.prototype[name] = baseCtor.prototype[name];
//         });
//     });
// }

interface Coordenador extends Professor, Direcao {}
applyMixins(Coordenador, [Professor, Direcao])

const coordenador = new Coordenador("joão")
coordenador.inserirNotas()
coordenador.modificarNotas()