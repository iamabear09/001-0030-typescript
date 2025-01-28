import ChromeGrimpan from './ChromeGrimpan.js';
import IEGrimpan from './IEGrimpan.js';
import AbstractGrimpanFactory from "./AbstractGrimpanFactory";
class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
}
class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
}
//TODO: typeof 가 필요한 이유는 뭐지...?
function main(factory) {
    const grimpan = factory.createGrimpan();
    grimpan.initialize();
    grimpan.initializeMenu();
    // const chromeGrimpan = ChromeGrimpanFactory.createGrimpan();
    // const ieGrimpan = IEGrimpanFactory.createGrimpan();
}
