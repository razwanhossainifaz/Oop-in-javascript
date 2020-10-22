class Animal {
    constructor(){

    }
    talk(){
        throw new Error ("You must implement talk method")
    }
}

class Cat extends Animal{
    talk(){
        console.log('Meow Meow');
    }
}

class Dog extends Animal{
    talks(){
        console.log('Gheu Gheu');
    }
    talk(){
        console.log('Gheu Gheu 2');
    }
}

const myCat = new Cat();
myCat.talk();
const myDog = new Dog();
myDog.talk();