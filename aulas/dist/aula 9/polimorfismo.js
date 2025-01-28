"use strict";
var Animal;
(function (Animal) {
    class Dog {
        bark() {
            console.log("bark");
        }
    }
    Animal.Dog = Dog;
    class Cat {
        meow() {
            console.log("meow");
        }
    }
    Animal.Cat = Cat;
})(Animal || (Animal = {}));
const dog = new Animal.Dog();
dog.bark(); //bark
const cat = new Animal.Cat();
cat.meow(); //meow
