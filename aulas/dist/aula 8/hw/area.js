"use strict";
// interface Shape{
//     calcularArea(): number;
// }
// class Circulo implements Shape {
//     constructor(public radius: number) {}
//     calcularArea(): number {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// }
// class Retangulo implements Shape {
//     constructor(public width: number, public height: number) {}
//     calcularArea(): number {
//         return this.width * this.height;
//     }
// }
// class Triangulo implements Shape {
//     constructor(public base: number, public height: number) {}
//     calcularArea(): number {
//         return 0.5 * this.base * this.height;
//     }
// }
// function printArea(shapes: Shape[]) {
//     shapes.forEach(shape => {
//         console.log(`A área da forma é: ${shape.calcularArea()}`);
//     });
// }
// // Criando instâncias das classes
// const circulo = new Circulo(5);
// const retangulo = new Retangulo(4, 6);
// const triangulo = new Triangulo(3, 4);
// // Criando um array de formas
// const shapes: Shape[] = [circulo, retangulo, triangulo];
// // Imprimindo as áreas
// console.log(shapes);
