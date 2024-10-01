class Autok {
    constructor() {
        this.autoLista = document.getElementById('auto-lista');
    }

    updateList(autok) {
        this.autoLista.innerHTML = ''; 

        autok.forEach(auto => {
            const listaElem = document.createElement('li');
            listaElem.innerHTML = `
                ${auto.marka} ${auto.tipus} (${auto.evjarat}) - Darabszám: ${auto.darabszam}
                <button data-id="${auto.id}">Törlés</button>
            `;
            this.autoLista.appendChild(listaElem);
        });

        this.attachDeleteEvent();
    }

    attachDeleteEvent() {
        const gombok = this.autoLista.querySelectorAll('button');
        gombok.forEach(gomb => {
            gomb.addEventListener('click', () => {
                const id = parseInt(gomb.getAttribute('data-id'));
                this.onDeleteAuto(id);
            });
        });
    }
}