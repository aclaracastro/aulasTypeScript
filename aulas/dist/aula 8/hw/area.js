"use strict";
class Circulo {
    constructor(radius) {
        this.radius = radius;
    } //inicializa o raio do circulo
    calcularArea() {
        return Math.PI * Math.pow(this.radius, 2); //π * r²
    }
}
class Retangulo {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcularArea() {
        return this.width * this.height; //base * altura
    }
}
class Triangulo {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calcularArea() {
        return 0.5 * this.base * this.height; //(base * altura) / 2
    }
}
function printArea(shapes) {
    shapes.forEach(shape => {
        console.log(`A área da forma é: ${shape.calcularArea()}`);
    });
}
const circulo = new Circulo(5);
const retangulo = new Retangulo(4, 6);
const triangulo = new Triangulo(3, 4);
const shapes = [circulo, retangulo, triangulo];
// imprimindo a área
printArea(shapes);
