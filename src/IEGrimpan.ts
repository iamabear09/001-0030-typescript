import Grimpan from "./AbstractGrimpan";

class IEGrimpan extends Grimpan {
    private static instance: IEGrimpan;

    initialize() {}
    initializeMenu() {}

    static override getInstance(): IEGrimpan {
        if (!this.instance) {
            this.instance = new IEGrimpan(document.querySelector('canvas'))
        }
        return this.instance;
    }
}

export default IEGrimpan;
