/*
GYVUNAI:
kaip juda? kojos/sparnai/pelekai
isore: oda/plaukai/kailis/zvynai/pluksnos
akys: 0/2/n
kalbejimas? loja/miaukia/negali
gimimas: zinduoliai/kiausinis
*/

/*
MEDIA PRIEMONES:
tipas: tv/radio/laikrastis/telefonas
info perdavimo/priemimo budas: ekranas/popierius/garsas
portable: true/false
savininkas: private/goverment
*/

/*
AUTO:
varyklis: ICE/electric
energijos saltinis: dujos/benzas/dizelis/elektra/vandelis
pavaros: automatas/mechanine/mix/tiesiogine
kebulas: sedanas/hecbekas/vienaturis...
ratu: 3/4/6/8...
varomos asys: priekine/galine/visos/visos iskirus priekine
*/

class Automobilis {
    constructor(pavadinimas, modelis, spalva, varyklis, kuras, kuroTalpa, kuroSanaudos) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.engine = varyklis;
        this.fuel = kuras;
        this.fueltank = kuroTalpa;
        this.consumption = kuroSanaudos;
        this.engineON = false;
    }

    prisistatyk() {
        return `Automoblis ${this.name} ${this.model} turi varykli ${this.engine} kurio kuro tipas ${this.fuel}.`;
    }

    turnOn() {
        if (this.engineON) {
            console.log(`${this.name} ${this.model} varyklis jau yra ijungtas! Negadink!!!`);
            return;
        }
        this.engineON = true;
        console.log(`${this.name} ${this.model} varyklis ijungtas!`);
    }

    turnOff() {
        if (!this.engineON) {
            console.log(`${this.name} ${this.model} ijsungto varyklio dar karto isjungti negali!`);
            return;
        }
        this.engineON = false;
        console.log(`${this.name} ${this.model} varyklis isjungtas!`);
    }

    ride() {
        if (!this.engineON) {
            console.log(`${this.name} ${this.model} vaziuoti negali - ijunk varykli.`);
            return;
        }
        this.fueltank -= this.consumption;
        if (this.fueltank > 0) {
            console.log(`${this.name} ${this.model} nuvaziavo 100km ir liko ${this.fueltank} kuro.`);
        } else {
            console.log(`${this.name} ${this.model} vaziavo ir baigesi kuras.`);
            this.turnOff();
        }
    }
}

const audi80 = new Automobilis('Audi', '80', 'raudona', 'ice', 'benzinas', 70, 8);
const teslaX = new Automobilis('Tesla', 'X', 'balta', 'electric', 'elektra', 200, 18);
const toyotoPrius = new Automobilis('Toyoto', 'Prius', 'pilkas', 'hybrid', ['benzinas', 'elektra'], [50, 80], [5, 20]);


teslaX.turnOn();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();
teslaX.ride();

console.log('--------');

audi80.turnOn();
audi80.ride();
audi80.ride();
audi80.ride();
audi80.ride();
audi80.ride();
audi80.ride();
audi80.ride();
audi80.ride();
audi80.ride();
audi80.ride();