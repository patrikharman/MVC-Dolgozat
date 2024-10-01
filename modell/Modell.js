class Auto {
    constructor(id, marka, tipus, evjarat, darabszam) {
        this.id = id;
        this.marka = marka;
        this.tipus = tipus;
        this.evjarat = evjarat;
        this.darabszam = darabszam;
    }
}

class AutoModel {
    constructor() {
        this.autok = [
            new Auto(1, "Toyota", "Corolla", 2020, 5),
            new Auto(2, "Ford", "Focus", 2019, 3),
            new Auto(3, "BMW", "X5", 2021, 2),
        ];
    }

    getAutok() {
        return this.autok;
    }

    torol(id) {
        this.autok = this.autok.filter(auto => auto.id !== id);
    }
}