interface Shape{
    calcularArea(): number;
}


class Circulo implements Shape {
    constructor(public radius: number) {} //inicializa o raio do circulo

    calcularArea(): number {
        return Math.PI * Math.pow(this.radius, 2); //π * r²
    }
}

class Retangulo implements Shape {
    constructor(public width: number, public height: number) {}

    calcularArea(): number {
        return this.width * this.height; //base * altura
    }
}

class Triangulo implements Shape {
    constructor(public base: number, public height: number) {}

    calcularArea(): number { 
        return 0.5 * this.base * this.height; //(base * altura) / 2
    }
}

function printArea(shapes: Shape[]) {
    shapes.forEach(shape => {
        console.log(`A área da forma é: ${shape.calcularArea()}`);
    });
}

const circulo = new Circulo(5);
const retangulo = new Retangulo(4, 6);
const triangulo = new Triangulo(3, 4);


const shapes: Shape[] = [circulo, retangulo, triangulo];

// imprimindo a área
printArea(shapes);