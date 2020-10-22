class Animal {
    static category = 'Dog'
    location = 'Khagrachori'
    constructor(name , speed){
        this.name = name
        this.speed = speed
    }
    static compare(animal1 , animal2){
        if(animal1.speed > animal2.speed){
            return `${animal1.name} is Faster`;
        }
        return `${animal2.name} is Faster`;
    }
}

const myDog = new Animal('Dog' , 20)
console.log(myDog.location);
console.log(Animal.location);
console.log(Animal.category);