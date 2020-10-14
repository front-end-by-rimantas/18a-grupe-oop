import { Dog } from './Dog.js';

class VoicelessDog extends Dog {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.voice = false;
    }

    sound() {
        console.log(`${this.name}: can not speak...`);
    }
}

export { VoicelessDog }