import {ChromeGrimpanFactory, GrimpanFactory} from "./GrimpanFactory";

function main(factory: typeof GrimpanFactory) {
    const grimpan = factory.createGrimpan();
    const grimpanMenu = factory.createGrimpanMenu(grimpan);
    const grimpanHistory = factory.createGrimpanHistory(grimpan);
    grimpan.initialize();
    grimpanMenu.initialize();
    grimpanHistory.initialize();

    // const chromeGrimpan = ChromeGrimpanFactory.createGrimpan();
    // const ieGrimpan = IEGrimpanFactory.createGrimpan();
}
