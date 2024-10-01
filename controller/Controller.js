import Modell from "../modell/Modell.js";
import Autok from "..view/Autok.js";

export default class AutoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.onDeleteAuto = this.handleDeleteAuto.bind(this);
        this.updateView();
    }

    updateView() {
        this.view.updateList(this.model.getAutok());
    }

    handleDeleteAuto(id) {
        this.model.torol(id);
        this.updateView();
    }
}