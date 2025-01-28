import Grimpan from "./AbstractGrimpan";

class ChromeGrimpan extends Grimpan {
    private static instance: ChromeGrimpan;

    initialize() {}
    initializeMenu() {}

    static override getInstance(): ChromeGrimpan {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.querySelector('canvas'))
        }
        return this.instance;
    }
}

export default ChromeGrimpan;