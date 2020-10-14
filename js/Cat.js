import { Memal } from './Memal.js';

class Cat extends Memal {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.voice = 'Miau miau';
    }
}

export { Cat }