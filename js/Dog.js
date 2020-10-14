import { Memal } from './Memal.js';

class Dog extends Memal {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.voice = 'Au au';
    }

    tail() {
        console.log(`${this.name} swings a tail. 🐕‍🦺`);
    }
}

export { Dog }