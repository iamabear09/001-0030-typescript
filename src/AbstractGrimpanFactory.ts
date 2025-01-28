import Grimpan from "./AbstractGrimpan";

abstract class AbstractGrimpanFactory {
    static createGrimpan(): Grimpan {
        throw new Error('Method not implemented.');
    }
}

export default AbstractGrimpanFactory;