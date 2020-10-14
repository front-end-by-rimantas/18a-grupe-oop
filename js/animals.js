import { Dog } from './Dog.js';
import { VoicelessDog } from './VoicelessDog.js';
import { Cat } from './Cat.js';
import { Bird } from './Bird.js';
import { Memal } from './Memal.js';

/*
GYVUNAI:
kaip juda? kojos/sparnai/pelekai
isore: oda/plaukai/kailis/zvynai/pluksnos
akys: 0/2/n
kalbejimas? loja/miaukia/negali
gimimas: zinduoliai/kiausinis
*/

/*
Animals:                (name, sound())
    Memals:         (fur)
        Dog
        Cat
    Flyers:       (feather)
        Bird
        Pegeons
*/

const mem = new Memal('Zindulis', 'red');

const rex = new Dog('Rex', 'brown');
const rikis = new VoicelessDog('Rikis', 'brown');
const rainis = new Cat('Rainis', 'ginger');
const kiesa = new Bird('Kieša', 'yellow');

mem.sound();
console.log(mem.name);
console.log(mem.fur);

rex.sound();
console.log(rex.name);
console.log(rex.fur);
rex.tail();

rikis.sound();
console.log(rikis.name);
console.log(rikis.fur);
rikis.tail();