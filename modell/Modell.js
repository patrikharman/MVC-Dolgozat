export default class auto {
    constructor(id, marka, tipus, evjarat, darabszam) {
        this.id = id;
        this.marka = marka;
        this.tipus = tipus;
        this.evjarat = evjarat;
        this.darabszam = darabszam;
        this.kep =kep;
    }
}

class autoModel {
    constructor() {
        this.autok = [
            new auto(1, "Toyota", "Corolla", 2020, 4),
            new auto(2, "Ford", "Focus", 2019, 7),
            new auto(3, "BMW", "X5", 2021, 2),
        ];
        
    }

    getAutok() {
        return this.autok;
    }

    torol(id) {
        this.autok = this.autok.filter(auto => auto.id !== id);
    }
}