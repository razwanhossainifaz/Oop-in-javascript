class Tiger {
    #speed = 100;
    location = 'Bandorban'
    constructor(name){
        this.name = name
        this.#speed = 150
    }
    run(){
        console.log(`I am a ${this.name} . I run at ${this.#speed} mph . I live in ${this.location}`);
    }
}

const royal = new Tiger ('Royal Bengal Tiger')
royal.location = 'Sundarban'
royal.run();