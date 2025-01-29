import {ChromeGrimpanFactory} from "./GrimpanFactory";

function main() {
    const grimpan = ChromeGrimpanFactory.createGrimpan();
    const grimpanMenu = ChromeGrimpanFactory.createGrimpanMenu(grimpan);
    grimpan.initialize();
    grimpanMenu.initialize();

    // const chromeGrimpan = ChromeGrimpanFactory.createGrimpan();
    // const ieGrimpan = IEGrimpanFactory.createGrimpan();
}
