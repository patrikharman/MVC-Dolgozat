import Modell from "../modell/Modell.js";
import Autok from "..view/Autok.js";

export default class autoController {
    constructor(autoLista, view) {
        this.autoLista = autoLista;
        this.view = view;

        this.view.torlesGombKattintasra((id) => {
            this.autoLista.torol(id);
            this.view.frissit(this.autoLista.getAutok());
        });
    }

    init() {
        this.view.frissit(this.autoLista.getAutok());
    }
}



#esemenykezelo(){
    $(window).on("katt",(event)=>{
       this.tttModell.lepteto(event.detail);
       new Palya(tttModell.getList(),this.taroloElem);
    })
    }
    