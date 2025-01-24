"use strict";
class Circulo {
    constructor(radius) {
        this.radius = radius;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Retangulo {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcularArea() {
        return this.width * this.height;
    }
}
class Triangulo {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calcularArea() {
        return 0.5 * this.base * this.height;
    }
}
function printArea(shapes) {
    shapes.forEach(shape => {
        console.log(`A área da forma é: ${shape.calcularArea()}`);
    });
}
// Criando instâncias das classes
const circulo = new Circulo(5);
const retangulo = new Retangulo(4, 6);
const triangulo = new Triangulo(3, 4);
// Criando um array de formas
const shapes = [circulo, retangulo, triangulo];
// Imprimindo as áreas
printArea(shapes);
