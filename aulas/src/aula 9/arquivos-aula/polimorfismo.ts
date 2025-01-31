namespace Animal {
    export class Dog{
        bark(){
            console.log("bark");
        }
    }

    export class Cat{
        meow(){
            console.log("meow");
        }
    }
}

const dog = new Animal.Dog();
dog.bark(); //bark

const cat = new Animal.Cat();
cat.meow(); //meow
