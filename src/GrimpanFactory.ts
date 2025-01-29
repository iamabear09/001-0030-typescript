import Grimpan from "./AbstractGrimpan";
import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";
import {ChromeGrimpanMenu, GrimpanMenu, IEGrimpanMenu} from "./GrimpanMenu";

export abstract class GrimpanFactory {
    static createGrimpan(): Grimpan {
        throw new Error('Method not implemented.');
    }

    static createGrimpanMenu(grimpan: Grimpan): GrimpanMenu {
        throw new Error('Method not implemented.');
    }
}

export class ChromeGrimpanFactory extends GrimpanFactory {
    static override createGrimpan(): ChromeGrimpan {
        return ChromeGrimpan.getInstance();
    }
    static override createGrimpanMenu(grimpan: ChromeGrimpan): ChromeGrimpanMenu {
        return ChromeGrimpanMenu.getInstance(grimpan);
    }
}

export class IEGrimpanFactory extends GrimpanFactory {
    static override createGrimpan(): IEGrimpan {
        return IEGrimpan.getInstance();
    }
    static override createGrimpanMenu(grimpan: IEGrimpan): IEGrimpanMenu {
        return IEGrimpanMenu.getInstance(grimpan);
    }
}