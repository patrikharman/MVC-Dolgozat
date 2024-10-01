export default class autoNezet {
    constructor() {
        this.autoListaElem = document.getElementById('auto-lista');
    }


    megjelenitAutok(autok, torlesKezelo) {
        this.autoListaElem.innerHTML = ''; 

        autok.forEach(auto => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${auto.nev} - Szín: ${auto.szin} - Darabszám: ${auto.darabszam} - Kép: ${auto.kep}
                <button class="torles-gomb" data-id="${auto.id}">Törlés</button>
            `;
            this.autoListaElem.appendChild(li);
        });

        
        document.querySelectorAll('.torles-gomb').forEach(gomb => {
            gomb.addEventListener('click', esemeny => {
                const autoId = parseInt(esemeny.target.dataset.id);
                torlesKezelo(autoId); 
            });
        });
    }
}