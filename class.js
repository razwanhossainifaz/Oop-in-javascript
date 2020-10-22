class PenDrive {
    constructor(capacity , color , price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const Hp = new PenDrive('36GB' , 'black and gray' , '420bdt')
console.log(Hp); 