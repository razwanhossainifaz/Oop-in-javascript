class Hero {
    constructor(name , power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }
        return 'I have no power'
    }
    goForGrocery(budget){
        if(this.power && budget > 1000){
            console.log(this.getPower());
        }
        return 'Price is too high , i can not buy';
    }
}

const batman = new Hero('batman' , 'he can fly')
console.log(batman);
console.log(batman.goForGrocery(1010));