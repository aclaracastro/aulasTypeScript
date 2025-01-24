function getFirstElement<T>(arr:T[]): T { //esse T é tipo um coringa que pode representar qualquer tipo de dado por isso funciona tanto pra number quanto pra string
    return arr[0];
}

const numbers = [1,2,3];
const strings = ['a','b','c'];

console.log(getFirstElement(numbers)); //1
console.log(getFirstElement(strings)); //'a'

function merge<T, U>(obj1: T, obj2: U): T & U { //T & U pode ser qualquer tipo mas dois obj diferentes
    return { ...obj1, ...obj2 };
}

const result = merge({ name: 'Ana' }, { age: 20 });
console.log(result);

class Box<T>{
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T { //metodo da classe que volta o valor da propriedade content
        return this.content;
    }

}

const stringBox = new Box<string>("A book");
const numberBox = new Box<number>(123);

console.log(stringBox.getContent()); //"A book"
console.log(numberBox.getContent()); //123

interface KeyValue<K,V> {
    key: K;
    value: V;
}

const item: KeyValue<number,string> = { key: 1, value: "apple" };
const item2: KeyValue<string,number> = {key: "apple", value: 2};
console.log(item);
console.log(item2);
 
//criar funcao que deve garantir que os tipos dos objetos sejam preservados

function mergeObject <T extends object, U> (obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const obj1 = { name: "alice" };
const obj2 = { age: 25 };

const resultado = mergeObject(obj1, obj2)

console.log(result); // { name: 'alice', age: 25 }

//implementar funcao chamada de logValues que receba array de qualquer tipo (any[])

function logValues<T>(array: T[]): void { //array recebe qualquer tipo
    array.forEach(element => { //forEach itera sobre cada elemento do array ; arrow function que recebe cada elemento como argumento
      console.log(`valor ${element} tipo ${typeof element}`);
    });
  }
  
  logValues([42, 'oi', true]);
