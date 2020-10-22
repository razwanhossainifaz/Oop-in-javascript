class SmartDevice{
    constructor(name , price){
        this.name = name
        this.price = price
    }
    charging(){
        console.log('Charging is required');
    }
}

class Phone extends SmartDevice{
    constructor(name , price , camera){
        super(name , price)
        this.camera = camera
    }
    sendSms(){
        console.log('Also can sending sms');
    }
}

class Watch extends SmartDevice{
    constructor(name , price , distance){
        super(name , price)
        this.distance = distance
    }
}

class Tablet extends SmartDevice{
    constructor(name , price , isWifi){
        super(name , price)
        this.isWifi = isWifi
    }
}

const samsung = new Phone ('Samsung A30s' , 20000 , '1000 Pixel')
console.log(samsung);
samsung.charging()
samsung.sendSms();

const jaguar = new Watch('Jaguar' , 400000 , '10km')
console.log(jaguar);
jaguar.charging();

const symphony = new Tablet('Symphony' , 6000 , 'Yes')
console.log(symphony);
symphony.charging();