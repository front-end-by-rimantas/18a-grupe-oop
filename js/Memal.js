class Memal {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.fur = spalva;
        this.voice = 'Miau au';
    }

    sound() {
        console.log(`${this.name}: ${this.voice}!`);
    }
}

export { Memal }