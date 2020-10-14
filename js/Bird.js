class Bird {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.feather = spalva;
        this.voice = 'Ciulbu ulbu';
    }

    sound() {
        console.log(`${this.name}: ${this.voice}!`);
    }
}

export { Bird }