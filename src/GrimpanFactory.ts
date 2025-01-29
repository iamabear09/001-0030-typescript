import Grimpan from "./AbstractGrimpan";
import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";
import {ChromeGrimpanMenu, GrimpanMenu, IEGrimpanMenu} from "./GrimpanMenu";
import {ChromeGrimpanHistory, GrimpanHistory, IEGrimpanHistory} from "./GrimpanHistory";

export abstract class GrimpanFactory {
    static createGrimpan(): Grimpan {
        throw new Error('Method not implemented.');
    }

    static createGrimpanMenu(grimpan: Grimpan): GrimpanMenu {
        throw new Error('Method not implemented.');
    }

    static createGrimpanHistory(grimpan: Grimpan): GrimpanHistory {
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
    static override createGrimpaHistory(grimpan: ChromeGrimpan): ChromeGrimpanHistory {
        return ChromeGrimpanHistory.getInstance(grimpan);
    }
}

export class IEGrimpanFactory extends GrimpanFactory {
    static override createGrimpan(): IEGrimpan {
        return IEGrimpan.getInstance();
    }
    static override createGrimpanMenu(grimpan: IEGrimpan): IEGrimpanMenu {
        return IEGrimpanMenu.getInstance(grimpan);
    }
    static override createGrimpanHistory(grimpan: IEGrimpan): IEGrimpanHistory {
        return IEGrimpanHistory.getInstance(grimpan);
    }
}