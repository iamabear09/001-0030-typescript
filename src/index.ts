import {ChromeGrimpanFactory} from "./GrimpanFactory";

function main() {
    const grimpan = ChromeGrimpanFactory.createGrimpan();
    const grimpanMenu = ChromeGrimpanFactory.createGrimpanMenu(grimpan);
    const grimpanHistory = ChromeGrimpanFactory.createGrimpanHistory(grimpan);
    grimpan.initialize();
    grimpanMenu.initialize();
    grimpanHistory.initialize();

    // const chromeGrimpan = ChromeGrimpanFactory.createGrimpan();
    // const ieGrimpan = IEGrimpanFactory.createGrimpan();
}
